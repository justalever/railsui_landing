import { Application } from "@hotwired/stimulus"

import CanvasController from "./controllers/canvas_controller"

import SubscribeController from "./controllers/subscribe_controller"

window.Stimulus = Application.start()

Stimulus.register("canvas", CanvasController)
Stimulus.register("subscribe", SubscribeController)
