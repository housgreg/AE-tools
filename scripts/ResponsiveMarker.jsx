///// Script pour ajouter en intro et outro des marqueurs responsives //////

app.beginUndoGroup("Responsive Marker");

var duree = 1.3;

var myComp = app.project.activeItem;

var markerIn = new MarkerValue("In");
markerIn.duration = duree;
markerIn.protectedRegion = true;
myComp.markerProperty.setValueAtTime(0, markerIn)

var markerOut = new MarkerValue("Out");
markerOut.duration = duree;
markerOut.protectedRegion = true;
myComp.markerProperty.setValueAtTime(myComp.duration-duree, markerOut)

app.endUndoGroup();

////// Command ID //////
/*app.executeCommand(4151); //intro
app.executeCommand(4152); //outro*/