function UpdateTitle() {
   document.getElementById("title").innerHTML = mod.name
}

setInterval(UpdateTitle, 80)
