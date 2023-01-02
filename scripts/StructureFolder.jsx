//// Structure Folder AfterEffects /////
//// Version Beta 0.4 - By Greg /////


var panelGlobal = this;

var uiWindow = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette", undefined, undefined, {resizeable: true}); 
if ( !(panelGlobal instanceof Panel) ) dialog.text = "Structure Folder"; 


// GROUP1
// ======
var group1 = uiWindow.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 5; 
    group1.margins = 0; 

// GROUP2
// ======
var group2 = uiWindow.add("group", undefined, {name: "group1"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 5; 
    group2.margins = 0; 

// Ajout d"un champ de texte pour le nom du dossier
var folderNameField = group1.add("edittext", [0, 0, 180, 25], "0000_Client_Type");
//folderNameField.alignment = ["left", "top"];


// Ajout d"un bouton "Create" pour créer le dossier
var createButton = group1.add("button", [0, 0, 40, 23], "Créer");


uiWindow.layout.layout(true);
uiWindow.layout.resize();
uiWindow.onResizing = uiWindow.onResize = function () { this.layout.resize(); }


createButton.onClick = function() {
  try {
    // Récupération du nom du dossier à partir du champ de texte
    var folderName = folderNameField.text;
    
    // Ouvre une fenêtre de dialogue "Enregistrer sous" pour sélectionner un dossier
    var saveFolder = Folder.selectDialog("Sélectionner le dossier de déstination");
    
    // Si l"utilisateur a sélectionné un dossier, crée le dossier et enregistre le fichier After Effects
    if (saveFolder) {
        // Création du chemin d"accès au dossier et creation du dossier
         var folderPath = saveFolder.fsName + "/" + folderName;
         var folder = new Folder(folderPath);
         folder.create();
        }

    /////////// Structure dossiers //////////
        var Dossier1 = ["src", "assets", "audio"];
        var Dossier2 = "export";
        var Dossier3 = "elements";


        var ListfolderNames = Dossier1;
        var baseFolder = folderPath;
        
        // Boucle sur la liste des noms de dossiers
        for (var i = 0; i < ListfolderNames.length; i++) {
          var folderName1 = ListfolderNames[i];
          var folderPath1 = baseFolder.toString() + "/" + folderName1;  // Chemin d"accès du dossier à créer
        
          var folder1 = new Folder(folderPath1); 
          folder1.create();
          baseFolder = folder1;  // Met à jour le dossier courant pour la prochaine itération de la boucle
        }
        
        // dossier 2
        var folderPath2 = folderPath + "/" + Dossier2;
        var folder2 = new Folder(folderPath2);
        folder2.create();

        // dossier 3
        var folderPath3 = folderPath + "/" + Dossier3;
        var folder3 = new Folder(folderPath3);
        folder3.create();
    /////////// Structure dossiers //////////

        
    /////////// After Effects //////////

    // Enregistrement du fichier After Effects dans le dossier
    app.newProject(); //pour eviter de perdre un fichier deja ouvert
    app.project.save(new File (folderPath + "/src/" + folderName + ".aep"));

    //Creation des dossiers
    var folderAssets = app.project.items.addFolder("assets");
    folderAssets.items.addFolder ("audio");
    folderAssets.items.addFolder ("metrage");
    var folderComps = app.project.items.addFolder("comps");

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

    /////////// After Effects //////////

} catch (e) {
    // Affiche un message d"erreur si une erreur est survenue
    alert("An error occurred: " + e.message);
}

   };
      

// Affichage de la fenêtre de l"interface utilisateur
if ( uiWindow instanceof Window ) uiWindow.show();
