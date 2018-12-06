import {Mcursors} from "./mgauge"
import {DisplayData} from "./displayData"

document.addEventListener('DOMContentLoaded',() => {
    Mcursors('.m-cursor')
    DisplayData("mail")
    DisplayData("phone")
});