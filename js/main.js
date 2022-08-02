function UpdateTitle() {
   document.getElementById("title").innerHTML = mod.name
}

document.body.style.backgroundColor = mod.backgroundColor

setInterval(UpdateTitle, 80)
