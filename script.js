import * as elements from "./elements.js"
function edit() {
  elements.vehicle.setAttribute("contenteditable", true)
  elements.age.setAttribute("contenteditable", true)
  elements.km.setAttribute("contenteditable", true)
  elements.fuel.setAttribute("contenteditable", true)
  elements.transmission.setAttribute("contenteditable", true)
  elements.price.setAttribute("contenteditable", true)
}
document.querySelector("#edit").addEventListener("click", () => edit())
