(ns apps.core
    (:require
      [reagent.core :as r]))

;; -------------------------
;; Views

(defn home-page []
  [:div
   [:h2 "Test: try this later."]
   [:p "This is currently a stub, I'm testing building some cljs code into my automatic website deploy."]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
