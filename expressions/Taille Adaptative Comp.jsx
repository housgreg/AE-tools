app.beginUndoGroup("Taille Adaptative Composition");

var myLayers = app.project.activeItem.selectedLayers;
for (var i = 0; i < myLayers.length; i++){
myLayers[i].property("Scale").expression = "c = .9; //controle de la taille;\n" +
"maxW = thisComp.width*c;\n" +
"MaxH = thisComp.height;\n" +
"r = sourceRectAtTime(time);\n" +
"w = r.width;\n" +
"h = r.height;\n" +
"s = w/h > maxW/MaxH ? maxW/w: maxH/h;\n" +
"[100,100]*s;"
}
app.endUndoGroup();