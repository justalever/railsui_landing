import { Application } from "@hotwired/stimulus"

import CanvasController from "./controllers/canvas_controller"

window.Stimulus = Application.start()

Stimulus.register("canvas", CanvasController)
