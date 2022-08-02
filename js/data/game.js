var game = {
  layers:[{
    startData:{
      unlocked:true,
      resource:new Decimal(0)
    },
    name:"Mass",
    layerId:0,
    layerShown() {return true},
  }],
  changelog:new Changelog("changelog", "Changelog", changelog)
}

document.getElementById("click").onclick = () => {
  game.layers[0].startData.resource = game.layers[0].startData.resource.add(1)
}
