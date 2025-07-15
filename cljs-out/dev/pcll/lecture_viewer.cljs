(ns ^:figwheel-hooks pcll.lecture-viewer
  (:require
   [cuerdas.core :as str] ; Use cuerdas instead of clojure.string
   [goog.dom :as gdom]
   ;; Removed ["vtt.js" :as vtt]
   [reagent.core :as reagent]
   [reagent.dom :as rdom]))

;; App state
(def app-state
  (reagent/atom
   {:video-url nil
    :subtitles []
    :current-time 0
    :duration 0
    :playback-speed 1.0
    :search-query ""
    :filtered-subtitles []
    :playing? false
    ;; State for draggable subtitles
    :subtitle-offset {:x 289 :y 0} ; Use nil initially to rely on CSS positioning
    :dragging-subtitle? false
    :drag-start-info nil
    :right-panel-visible? true})) ; Stores {:start-x :start-y :initial-offset-x :initial-offset-y}

app-state

;; Refs for DOM elements
(def video-ref (atom nil))
 ;; subtitle-panel-ref removed
 
 ;; Removed VTT Parser instance
 
 ;; Helper function to parse VTT time format (HH:MM:SS.ms) to milliseconds
 (defn- parse-vtt-time [time-str]
   (if-let [matches (re-matches #"(\d{2}):(\d{2}):(\d{2})\.(\d{3})" time-str)]
     (let [[_ h m s ms] matches
           hours (js/parseInt h)
           minutes (js/parseInt m)
           seconds (js/parseInt s)
           milliseconds (js/parseInt ms)]
       (+ (* hours 3600000) (* minutes 60000) (* seconds 1000) milliseconds))
     (if-let [matches (re-matches #"(\d{2}):(\d{2})\.(\d{3})" time-str)] ; Handle MM:SS.ms format too
       (let [[_ m s ms] matches
             minutes (js/parseInt m)
             seconds (js/parseInt s)
             milliseconds (js/parseInt ms)]
         (+ (* minutes 60000) (* seconds 1000) milliseconds))
       (do (js/console.warn "Could not parse VTT time:" time-str) 0)))) ; Return 0 if format is unexpected

;; Helper to pad numbers with leading zeros
(defn pad-number [num len pad-char]
  (let [s (str num)]
    (if (>= (count s) len)
      s
      (str (apply str (repeat (- len (count s)) pad-char)) s))))

 ;; Parse VTT subtitles using custom parser
  (defn parse-vtt [vtt-text]
    (try
      (let [lines (str/lines vtt-text) ; Use cuerdas.core/lines
            ;; Group lines into blocks separated by blank lines
            blocks (->> lines
                        (partition-by str/blank?)
                       (remove #(every? str/blank? %)))]
       (->> blocks
            (keep (fn [block]
                    ;; (js/console.log "Processing block:" block) ; Optional debug log
                    ;; Basic validation: Skip header and ensure block has timestamp + text
                    (when (and (not= (first block) "WEBVTT")
                               (>= (count block) 1) ; Need at least one line (timestamp or text)
                               ;; Find the line containing "-->"
                               (some #(str/includes? % "-->") block))
                      (let [timestamp-line-index (first (keep-indexed (fn [idx line] (when (str/includes? line "-->") idx)) block))
                            timestamp-line (nth block timestamp-line-index nil)
                            text-lines (vec (drop (inc timestamp-line-index) block))] ; Ensure text-lines is a vector
                        (when timestamp-line
                          (let [time-matches (re-find #"(\d{2}:\d{2}:\d{2}\.\d{3}|\d{2}:\d{2}\.\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}\.\d{3}|\d{2}:\d{2}\.\d{3})" timestamp-line)]
                            (when time-matches
                              (let [[_ start-str end-str] time-matches
                                    parsed-cue {:start (parse-vtt-time start-str)
                                                :end (parse-vtt-time end-str)
                                                :text (str/join "\n" text-lines)}]
                                ;; (js/console.log "Parsed cue:" parsed-cue) ; Optional debug log
                                parsed-cue))))))))
            (vec))) ; Return as a vector
     (catch js/Error e
       (js/console.error "Error parsing VTT:" e)
       []))) ; Return empty list on error

;; Helper to format time (MM:SS)
(defn format-time [time-ms]
  (if (js/isNaN time-ms)
    "00:00"
    (let [total-seconds (js/Math.floor (/ time-ms 1000))
          minutes (js/Math.floor (/ total-seconds 60))
           seconds (mod total-seconds 60)]
       (str (pad-number minutes 2 "0") ":" (pad-number seconds 2 "0")))))

;; Video controls
(defn toggle-play []
  (when-let [video @video-ref]
    (if (.-paused video)
      (do (.play video) (swap! app-state assoc :playing? true))
      (do (.pause video) (swap! app-state assoc :playing? false)))))

(defn set-playback-speed [speed-str]
  (when-let [video @video-ref]
    (let [speed (js/parseFloat speed-str)]
      (set! (.-playbackRate video) speed)
      (swap! app-state assoc :playback-speed speed))))

(defn seek [offset-seconds]
  (when-let [video @video-ref]
    (let [new-time (+ (.-currentTime video) offset-seconds)]
      (set! (.-currentTime video) (max 0 new-time))))) ; Prevent seeking before 0

(defn set-position [time-ms]
  (when-let [video @video-ref]
    (set! (.-currentTime video) (/ time-ms 1000))))

(defn toggle-right-panel []
  (swap! app-state update :right-panel-visible? not))

;; Subtitle handling
(defn get-current-subtitle-index [subtitles current-time-ms]
  (first (keep-indexed (fn [idx {:keys [start end]}]
                          (when (<= start current-time-ms end) idx))
                       subtitles)))

;; --- Draggable Subtitle Handlers ---

;; Define move and end handlers first so they can be referenced by start handler
(defn handle-subtitle-drag-move [event]
  (when (:dragging-subtitle? @app-state)
    (let [start-info (:drag-start-info @app-state)
          dx (- (.-clientX event) (:start-x start-info))
          dy (- (.-clientY event) (:start-y start-info))
          new-x (+ (:initial-offset-x start-info) dx)
          new-y (+ (:initial-offset-y start-info) dy)]
      (swap! app-state assoc-in [:subtitle-offset] {:x new-x :y new-y}))))

(defn handle-subtitle-drag-end [event]
  (when (:dragging-subtitle? @app-state)
    (do
      (swap! app-state assoc
             :dragging-subtitle? false
             :drag-start-info nil)
      ;; Remove global listeners
      (.removeEventListener js/window "mousemove" handle-subtitle-drag-move)
      (.removeEventListener js/window "mouseup" handle-subtitle-drag-end))))

(defn handle-subtitle-drag-start [event]
  (.preventDefault event) ; Prevent text selection during drag
  (let [current-offset (:subtitle-offset @app-state)
        ;; Get initial offset from style if state is nil, otherwise use state
        initial-x (or (:x current-offset) 0) ; Default to 0 if nil
        initial-y (or (:y current-offset) 0)] ; Default to 0 if nil
    (do
      (swap! app-state assoc
             :dragging-subtitle? true
             :drag-start-info {:start-x (.-clientX event)
                               :start-y (.-clientY event)
                               :initial-offset-x initial-x
                               :initial-offset-y initial-y})
      ;; Add global listeners for move and end
      ;; Add global listeners for move and end
      (.addEventListener js/window "mousemove" handle-subtitle-drag-move)
      (.addEventListener js/window "mouseup" handle-subtitle-drag-end))))

;; --- End Draggable Subtitle Handlers ---


;; visible-subtitles function removed

;; Components
(defn video-player []
  (let [current-time (:current-time @app-state)
        subtitles (:subtitles @app-state)
        current-idx (get-current-subtitle-index subtitles current-time)
        current-subtitle (when current-idx (get subtitles current-idx))]
    [:div.video-container {:style {:position "relative"}} ; Make container relative for absolute positioning of overlay
     [:video {:ref #(reset! video-ref %)
              :src (:video-url @app-state) ; Added src attribute
            :controls false
            :style {:width "100%"}
            :on-time-update #(swap! app-state assoc :current-time (* 1000 (.-currentTime @video-ref)))
            :on-loaded-metadata #(let [duration (* 1000 (.-duration @video-ref))]
                                   (when-not (js/isNaN duration) ; Ensure duration is valid
                                     (swap! app-state assoc :duration duration)))}]
     ;; Subtitle Overlay
     (when current-subtitle
       (let [offset (:subtitle-offset @app-state)
             style (cond-> {} ; Start with empty style map
                     ;; Apply offset only if it's not nil (i.e., after first drag)
                     (:x offset) (assoc :left (str (:x offset) "px"))
                     (:y offset) (assoc :top (str (:y offset) "px")))]
         [:div.subtitle-overlay
          {:style style
           :on-mouse-down handle-subtitle-drag-start}
          (:text current-subtitle)]))]))

(defn controls []
  [:div.controls
   [:button {:on-click toggle-play} (if (:playing? @app-state) "Pause" "Play")]
   [:button {:on-click toggle-right-panel} "Toggle Search"]
   [:span (format-time (:current-time @app-state))]
   [:input.slider {:type "range" :min 0 :max (:duration @app-state)
                   :value (:current-time @app-state)
                   :on-change #(set-position (js/parseInt (.. % -target -value)))}]
   [:span (format-time (:duration @app-state))]
   [:select {:value (:playback-speed @app-state)
             :on-change #(set-playback-speed (.. % -target -value))}
    [:option {:value 1.0} "1x"]
    [:option {:value 1.25} "1.25x"]
    [:option {:value 1.5} "1.5x"]
    [:option {:value 1.75} "1.75x"]
    [:option {:value 2.0} "2x"]
    [:option {:value 2.5} "2.5x"]
    [:option {:value 3.0} "3x"]
    [:option {:value 4.0} "4x"]
    [:option {:value 5.0} "5x"]]])

;; subtitle-panel function removed

(defn search-results []
  [:div.search-results
   (for [{:keys [start text]} (:filtered-subtitles @app-state)]
     ^{:key start}
     [:div.search-result {:on-click #(set-position start)}
      [:span.timestamp (format-time start)]
      [:span.text text]])])

(defn file-uploader [id label accept on-load]
  [:div
   [:label {:for id} label]
   [:input {:id id
            :type "file"
            :accept accept
            :on-change #(let [file (-> % .-target .-files (aget 0))]
                          (when file (on-load file)))}]])

(defn app []
  [:div.app-container
   ;; Left Panel: Video and Controls
   [:div.left-panel {:style {:flex "2" :display "flex" :flex-direction "column" :padding "10px"}}
    [video-player]
    [controls]
    [:div.file-uploaders {:style {:margin-top "10px"}}
     [file-uploader "video-upload" "Video: " "video/*"
      (fn [file] (swap! app-state assoc :video-url (js/URL.createObjectURL file)))]
     [file-uploader "subtitle-upload" "Subtitles (VTT): " ".vtt"
      (fn [file]
        (let [reader (js/FileReader.)]
          (set! (.-onload reader)
                (fn [e]
                  (let [parsed-subs (parse-vtt (.. e -target -result))]
                    (swap! app-state assoc :subtitles parsed-subs))))
          (.readAsText reader file)))]]]

   ;; Right Panel: Subtitles and Search
   (when (:right-panel-visible? @app-state)
     [:div.right-panel {:style {:flex "1" :display "flex" :flex-direction "column" :padding "10px" :overflow-y "hidden"}}
      ;; Removed Subtitle Panel display area
      [:h3 "Search"]
      [:input.search-bar {:type "text"
                          :placeholder "Search subtitles..."
                          :value (:search-query @app-state)
                          :on-change #(let [query (.. % -target -value)]
                                        (swap! app-state assoc
                                               :search-query query
                                               :filtered-subtitles
                                               (if (str/blank? query)
                                                 [] ; Clear results if query is empty
                                                 (filter (fn [{sub-text :text}] ; Destructure text directly
                                                           (str/includes? (str/lower sub-text) ; Use cuerdas.core/lower
                                                                          (str/lower query))) ; Use cuerdas.core/lower
                                                         (:subtitles @app-state)))))}]
      [:div {:style {:flex "1" :overflow-y "auto" :border "1px solid #ccc"}}
       [search-results]]])])

;; Keyboard shortcuts handler
(defn handle-keydown [event]
  (condp = (.-key event)
    " " (do (.preventDefault event) (toggle-play)) ; Spacebar for play/pause
    "ArrowRight" (seek 10) ; Right arrow to seek forward 10s
    "ArrowLeft" (seek -10) ; Left arrow to seek backward 10s
    nil)) ; Default case

;; Add/Remove event listener
(defn setup-keyboard-shortcuts []
  (.addEventListener js/document "keydown" handle-keydown))

(defn cleanup-keyboard-shortcuts []
  (.removeEventListener js/document "keydown" handle-keydown))


;; Mount the app
(defn mount-app-element []
  (cleanup-keyboard-shortcuts) ; Remove old listener if exists
  (rdom/render [app] (gdom/getElement "app"))
  (setup-keyboard-shortcuts)) ; Add new listener

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(when (gdom/getElement "app")
  (mount-app-element))

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element))
