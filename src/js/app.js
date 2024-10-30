import * as flsFunctions from "./modules/webpTest.js"
import "./modules/slider.js";
import { openFooter } from "./modules/buttons.js"

document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp();
  
  //--- My modules ------
  openFooter();
})
