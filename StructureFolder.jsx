//// Structure Folder AfterEffects /////
//// Version Beta 0.2 - By Greg /////

/* Pour le moment je n'arrive pas à renomer le dossier principale en utilisant les cases 'edittext'. 
Peut etre dans une function avec .onChange ? Mais je n'y arrive pas.
*/

////////// Interface UI AfterEffects ////////////
var panelGlobal = this;

var dialog = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette", undefined, undefined, {resizeable: true}); 
    if ( !(panelGlobal instanceof Panel) ) dialog.text = "Structure Folder"; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 10; 

// PANEL1
// ======
var panel1 = dialog.add("panel", undefined, undefined, {name: "panel1"}); 
    panel1.text = "Nom de dossier"; 
    panel1.orientation = "column"; 
    panel1.alignChildren = ["center","top"]; 
    panel1.spacing = 10; 
    panel1.margins = 10; 

// GROUP1
// ======
var group1 = panel1.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

var edittext1 = group1.add( "edittext", undefined, "0000"); 
    //edittext1.text = "0000"; 
    edittext1.preferredSize.width = 60; 



var edittext2 = group1.add("edittext", undefined, "Client"); 
    edittext2.preferredSize.width = 60; 

var edittext3 = group1.add("edittext", undefined, "Type"); 
    edittext3.preferredSize.width = 60; 

// PANEL1
// ======
var button1 = panel1.add("button", undefined, undefined, {name: "button1"}); 
    button1.text = "Create"; 
    button1.preferredSize.width = 200;

dialog.layout.layout(true);
dialog.layout.resize();
dialog.onResizing = dialog.onResize = function () { this.layout.resize(); }



//////////////////
var FolderMaster = edittext1.text +"_"+ edittext2.text +"_"+ edittext3.text;
var slash = "/";    //le slash pour MAC. Sur windows c'est 2 antislash (je crois).


/////////////////////////////////////////////////////////////////////////
button1.onClick = function(){folderStructure()};
/////////////////////////////////////////////////////////////////////////



/////////////// créer structure de dossier dans le Systeme ///////////////




// folderStructure();

function folderStructure(){

  var b = Folder.selectDialog("Choisissez le dossier de destination");

  if(b != null){

  myDefaultFolders(b);

  }

  saveProjet();

}



function myDefaultFolders(newRoot){

  var folderSrc, folderExp, folderElem, folderSrcLen, newCorePath, curFolderSrc, curFolderExp, curFolderElem;


  folderSrc = FolderMaster+slash+"src"+slash+"assets"+slash+"audio"; 
  folderExp = FolderMaster+slash+"export"; 
  folderElem = FolderMaster+slash+"elements"; 

  //folderSrc = []; //new Array > je n'ai pas reussi sur curFolderSrc.
  //folderSrc[0] = "Master"+slash+"src";
  //folderSrc[1] = "Master"+slash+"export";



  newCorePath = decodeURI(newRoot).toString();


  folderSrcLen = folderSrc.length;
  if(folderSrcLen > 0){
  for(var f=0; f<folderSrcLen; f++){


  curFolderSrc = Folder(newCorePath+slash+folderSrc);  //ici erreur quand j'utilise new Array.
  curFolderExp = Folder(newCorePath+slash+folderExp);  
  curFolderElem = Folder(newCorePath+slash+folderElem);  


  if(curFolderSrc.exists === false){
  curFolderSrc.create();
  }

  if(curFolderExp.exists === false){
  curFolderExp.create();  
  }

  if(curFolderElem.exists === false){
  curFolderElem.create();  
  }


  }
  return true;
  }else{
  return null;
  }


}


/////////////// Enregistrement du projet AfterEffects + créer structure dans AfterEffects ///////////////

function saveProjet(){
    app.newProject(); //pour eviter de perdre un fichier deja ouvert
    app.project.save();  //Je n'arrive pas à donner le même Nom de projet que le dossier principale (FolderMaster). Et j'aimerai qu'il s'enregistre dans le dossier "src".

    //Creation des dossiers
    var folderAssets = app.project.items.addFolder("assets");
    folderAssets.items.addFolder ("audio");
    folderAssets.items.addFolder ("metrage");
    var folderComps = folderAssets.items.addFolder ("comps");

    //Creer et Renomer la compo principale et mettre une couleur verte
    var projName = app.project.file.name.replace(/.aep/gi,"_1.0");
    var masterComp = app.project.items.addComp(projName, 1920, 1080, 1, 120, 25);
    masterComp.label = 9; //couleur du calque


    //Creation des multiCompo
    var nameMultiComp = new Array("01_","02_","03_","04_", "05_");

    for(var i=0; i < nameMultiComp.length; i++ ){
    folderComps.items.addComp(nameMultiComp[i], 1920, 1080, 1, 20,25);
    }

    //Creation une compo plus longue
    folderComps.items.addComp("background", 1920, 1080, 1, 120, 25);


    //Ouvrir la compo principale (masterComp)
    masterComp.openInViewer(); 

}

if ( dialog instanceof Window ) dialog.show();




/////////////////// En vrac /////////////////////////
//app.project.save(new File (FolderMaster+".aep"));  // Save le projet AfterEffects, mais je ne sais pas pourquoi il se copie sur le bureau
//app.project.save(new File());  



//var f = new Folder("~/Desktop/dossier_Motion");  //creer un dossier dans le system
//f.create();
