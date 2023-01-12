//// Structure Folder AfterEffects /////
//// Version Beta 0.5 - By Greg /////

////// creer un fichier texte settings ////////
    var targetFolder = new Folder(Folder.userData.fullName +"/"+ "Aescripts"+"/"+"StructureFolder");
    !targetFolder.exists && targetFolder.create();
    
    var defaults = [];
    var defaultFile = File(targetFolder.fullName + "/" + "Settings_StructureFolder.txt");
    if(!defaultFile.exists) {
        defaultFile.open("w");
        defaultFile.write("src\rassets/audio\rassets/metrage\rassets/ai\rassets/\rexport\relements\r1920\r1080\r120\rassets\raudio\rmetrage\rai\rcompos\rprecomps");
        defaultFile.close();
    } else {
        defaultFile.open("r");
        while(!defaultFile.eof) {
            defaults.push(defaultFile.readln().toString());
        }
    }
////// creer un fichier texte settings ////////


var panelGlobal = this;

var uiWindow = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette", undefined, undefined, {resizeable: true}); 
if ( !(panelGlobal instanceof Panel) ) uiWindow.text = "Structure Folder";

// GROUP1
var group0 = uiWindow.add("group", undefined, {name: "group1"}); 
    group0.orientation = "row"; 
    group0.alignChildren = ["left","center"]; 
    group0.spacing = 5; 
    group0.margins = 0; 

// Ajout champ de texte pour le nom du dossier
var folderNameField = group0.add("edittext", [0, 0, 180, 25], "0000_Client_Type");

// Ajout bouton "Create" et "settings" 
var imgSettings_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%05%C3%A0iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%209.0-c000%2079.171c27fab%2C%202022%2F08%2F16-22%3A35%3A41%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstRef%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceRef%23%22%20xmlns%3AstEvt%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceEvent%23%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Aphotoshop%3D%22http%3A%2F%2Fns.adobe.com%2Fphotoshop%2F1.0%2F%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3Aa5c64ca2-a541-4da7-94d8-0100b52f9b05%22%20xmpMM%3ADocumentID%3D%22xmp.did%3A0B79FB2FC55511EC95FECB1D6097022E%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A6dca8639-e01a-4ac6-b121-97b60d7351dc%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%2022.5%20(Macintosh)%22%20xmp%3ACreateDate%3D%222022-05-06T16%3A05%3A33%2B02%3A00%22%20xmp%3AModifyDate%3D%222023-01-11T19%3A09%3A35%2B01%3A00%22%20xmp%3AMetadataDate%3D%222023-01-11T19%3A09%3A35%2B01%3A00%22%20dc%3Aformat%3D%22image%2Fpng%22%20photoshop%3AColorMode%3D%223%22%3E%20%3CxmpMM%3ADerivedFrom%20stRef%3AinstanceID%3D%22xmp.iid%3Ace269a7f-025c-4fd0-97ed-26d81591ac86%22%20stRef%3AdocumentID%3D%22adobe%3Adocid%3Aphotoshop%3A63bc48f0-a9f9-b742-86ce-db79c04da5f5%22%2F%3E%20%3CxmpMM%3AHistory%3E%20%3Crdf%3ASeq%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A6dca8639-e01a-4ac6-b121-97b60d7351dc%22%20stEvt%3Awhen%3D%222023-01-11T19%3A09%3A35%2B01%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2024.1%20(Macintosh)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3C%2Frdf%3ASeq%3E%20%3C%2FxmpMM%3AHistory%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%C2%88%09s4%00%00%018IDAT8%C2%8D%C2%8D%C2%93%C2%BBJCA%14EW%12%C2%8D%C2%92B%C3%A2%C2%A3%10%C3%93(%C2%88X%C2%99%C3%82B%7C%C2%80%20%C2%88%C2%B5%C3%B8%0D%C2%A2%C3%81%7FH'%04%C3%BC%07-%C2%AC%14k%0B%11%C3%BC%07%C2%B1%09%C2%BE%3A%C2%AD%C2%B4H%13T%C3%8C%C2%B20W%C3%87%C3%89%C2%BD%C3%A0%C2%86%0B%C3%83%C2%99%C3%8D%C3%99k%C3%A6%C3%8CE%25%C3%A3k%C3%BA%C2%ABJ%C2%96%2F%C3%8F%C2%B7r%40%038%00%26%C2%80-%60%C2%92_m%03%C3%A3%40%0D8%06%C3%8A%3F%3B%C3%9DN%C2%8D%20%C3%AD%C3%95t%C2%BD%04%C3%ABKu%20%24%C3%A8%0B%C3%92%C2%86I%C3%97H%C2%B0%C3%AE%07%0C%09%C3%8AQB%C2%A2N%06%C3%8Djx%07%05%60%0D%18%0A%12Z%C3%80%1EP%056%C2%81%C3%9B%C2%88f%1D(%25%04%C3%97%C3%AA%7B%C2%94%C2%B0%1B%C3%9D%C3%B6%C2%BC%C3%9A%C2%8E%3C%C3%B7%C3%AA%0E%19%C3%98%C3%93%C3%B6%C2%8E%C3%AC.%C3%85%7B%C2%96%07%C3%9A%11%5E%0E%C2%98%C2%8Dj%15%60%2C%C2%AAu%C2%80%26%C3%9D%C2%B4z%C3%94%C2%B9%C2%A9.%C2%A8%C2%83%C3%AA%C2%94z%1E%C3%AD%C2%9F%C2%A8U%C2%B5%C2%98%C3%A0%C2%95%C3%AC%C2%9D%C3%82%C2%87%C3%BA%C2%A0%C2%B6R%C3%90%17%C2%93%C2%A3%25%0Dj%C3%AAg%C2%8A1KGj%C3%81%C3%A0!%C2%AD%C3%80%C3%8F%C3%BA%3FZ%06%C2%8A%C3%A1C%1AU%2F%C3%94%2BuC%C3%9D%C2%8F%C2%88N%C3%95u%C3%B5P%C2%BDQ%C3%A7%C3%A2%23%C2%A0%C3%A6%C3%BD%3B%C2%B6%C3%A7%C2%A0%C3%81LP%1F%08%7D%C3%A1%3F%C3%90%C2%890%C3%AB%C3%80%12%C3%B0%04%3C%06%C3%B5%C2%B7%C3%90%C3%B4%05%C2%A1TH%C3%B44%C2%A3e%C3%BC%00%00%00%00IEND%C2%AEB%60%C2%82"; 
//var imgSettings = settingsWindow.add("iconbutton", undefined, File.decode(imgSettings_imgString), {name: "imgSettings", style: "toolbutton"}); 

var createButton = group0.add("button", [0, 0, 40, 23], "Créer");
//var btnSettingsWindow = group0.add("button", [0, 0, 20, 23], "?");
var btnSettingsWindow = group0.add("iconbutton", undefined, File.decode(imgSettings_imgString), {name: "imgSettings", style: "toolbutton"});


uiWindow.layout.layout(true);
uiWindow.layout.resize();
uiWindow.onResizing = uiWindow.onResize = function () { this.layout.resize(); }

createButton.onClick = function() {
    try {

    var targetFolder = new Folder(Folder.userData.fullName +"/"+ "Aescripts"+"/"+"StructureFolder");
    !targetFolder.exists && targetFolder.create();
    var defaults = [];
    var defaultFile = File(targetFolder.fullName + "/" + "Settings_StructureFolder.txt");
    if(!defaultFile.exists) {
        defaultFile.open("w");
        defaultFile.close();
    } else {
        defaultFile.open("r");
        while(!defaultFile.eof) {
            defaults.push(defaultFile.readln().toString());
        }
    }

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
        var foldersrc = defaults[0];
        var Dossier1 = [foldersrc, defaults[1]];
        var Dossier1b = [foldersrc, defaults[2]];
        var Dossier1c = [foldersrc, defaults[3]];
        var Dossier1d = [foldersrc, defaults[4]];
        var Dossier2 = [defaults[5]];
        var Dossier3 = [defaults[6]];

        /////////
        var baseFolder1 = folderPath;
        var baseFolder1b = folderPath;
        var baseFolder1c = folderPath;
        var baseFolder1d = folderPath;
        var baseFolder2 = folderPath;
        var baseFolder3 = folderPath;

        // Boucle sur la liste des noms de dossiers
        for (var i = 0; i < Dossier1.length; i++) {
          var folderName1 = Dossier1[i];
          var folderPath1 = baseFolder1.toString() + "/" + folderName1;  // Chemin d"accès du dossier à créer
        
          var folder1 = new Folder(folderPath1); 
          folder1.create();
          baseFolder1 = folder1;  // Met à jour le dossier courant pour la prochaine itération de la boucle
        }
        for (var i = 0; i < Dossier1b.length; i++) {
            var folderName1b = Dossier1b[i];
            var folderPath1b = baseFolder1b.toString() + "/" + folderName1b;
            var folder1b = new Folder(folderPath1b); 
            folder1b.create();
            baseFolder1b = folder1b;
          }
        for (var i = 0; i < Dossier1c.length; i++) {
            var folderName1c = Dossier1c[i];
            var folderPath1c = baseFolder1c.toString() + "/" + folderName1c;
            var folder1c = new Folder(folderPath1c); 
            folder1c.create();
            baseFolder1c = folder1c; 
        }
        for (var i = 0; i < Dossier1d.length; i++) {
            var folderName1d = Dossier1d[i];
            var folderPath1d = baseFolder1d.toString() + "/" + folderName1d;
            var folder1d = new Folder(folderPath1d); 
            folder1d.create();
            baseFolder1d = folder1d;
            }

        for (var i = 0; i < Dossier2.length; i++) {
            var folderName2 = Dossier2[i];
            var folderPath2 = baseFolder2.toString() + "/" + folderName2; 
            var folder2 = new Folder(folderPath2); 
            folder2.create();
            baseFolder2 = folder2;
            }

        for (var i = 0; i < Dossier3.length; i++) {
            var folderName3 = Dossier3[i];
            var folderPath3 = baseFolder3.toString() + "/" + folderName3; 
            var folder3 = new Folder(folderPath3); 
            folder3.create();
            baseFolder3 = folder3;
            }

    /////////// Structure dossiers //////////

        
    /////////// After Effects //////////

    // Enregistrement du fichier After Effects dans le dossier
    app.newProject(); //pour eviter de perdre un fichier deja ouvert
    app.project.save(new File (folderPath + "/" + foldersrc + "/" + folderName + ".aep"));

    //Creer et Renomer la compo principale et mettre une couleur verte
    var compW = parseInt(defaults[7]);
    var compH = parseInt(defaults[8]);
    var projName = app.project.file.name.replace(/.aep/gi,"_1.0");
    var masterComp = app.project.items.addComp(projName, compW, compH, 1, defaults[9], 25);
    masterComp.label = 9; //couleur du calque

    //Creation des dossiers
    var folderAssets = app.project.items.addFolder(defaults[10]);
    folderAssets.items.addFolder (defaults[11]);
    folderAssets.items.addFolder (defaults[12]);
    folderAssets.items.addFolder (defaults[13]);
    var folderComps = app.project.items.addFolder(defaults[14]);
    folderComps.items.addFolder (defaults[15]);


    //Creation des multiCompo
    /*var nameMultiComp = new Array("01_","02_","03_","04_", "05_");
    for(var i=0; i < nameMultiComp.length; i++ ){
    folderComps.items.addComp(nameMultiComp[i], compW, compH, 1, 120, 25);
    }

    //Creation une compo plus longue
    folderComps.items.addComp("background", compW, compH, 1, 120, 25);*/

    //Ouvrir la compo principale (masterComp)
    masterComp.openInViewer(); 

    /////////// After Effects //////////

} catch (e) {
    // Affiche un message d"erreur si une erreur est survenue
    alert("An error occurred: " + e.message);
}

      
};

///////////// fenetre settings //////////////
btnSettingsWindow.onClick = function () {  

    var targetFolder = new Folder(Folder.userData.fullName +"/"+ "Aescripts"+"/"+"StructureFolder");
    !targetFolder.exists && targetFolder.create();
    var defaults = [];
    var defaultFile = File(targetFolder.fullName + "/" + "Settings_StructureFolder.txt");
    if(!defaultFile.exists) {
        defaultFile.open("w");
        defaultFile.close();
    } else {
        defaultFile.open("r");
        while(!defaultFile.eof) {
            defaults.push(defaultFile.readln().toString());
        }
    }
    
try {
////// creer un fichier texte settings ////////

// SETTINGSWINDOW
var settingsWindow = new Window("dialog"); 
    settingsWindow.text = "settingsWindow"; 
    settingsWindow.orientation = "column"; 
    settingsWindow.alignChildren = ["center","top"]; 
    settingsWindow.spacing = 10; 
    settingsWindow.margins = 16; 

// GROUP1
var group1 = settingsWindow.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","top"]; 
    group1.spacing = 20; 
    group1.margins = 0; 

// PANEL1
var panel1 = group1.add("panel", undefined, undefined, {name: "panel1"}); 
    panel1.text = "System Folder"; 
    panel1.orientation = "column"; 
    panel1.alignChildren = ["left","top"]; 
    panel1.spacing = 10; 
    panel1.margins = 10; 

// PANEL2 Creer dans le system les dossiers 1
var panel2 = panel1.add("panel", undefined, undefined, {name: "panel2"}); 
    panel2.text = "Folder 1"; 
    panel2.orientation = "column"; 
    panel2.alignChildren = ["left","top"]; 
    panel2.spacing = 10; 
    panel2.margins = 10; 

// GROUP2
var group2 = panel2.add("group", undefined, {name: "group2"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 2; 
    group2.margins = 0; 

var edittext1 = group2.add('edittext {properties: {name: "edittext1"}}'); 
    edittext1.text = defaults[0]; 
    edittext1.preferredSize.width = 50; 
    edittext1.alignment = ["left","top"]; 

// GROUP3
var group3 = group2.add("group", undefined, {name: "group3"}); 
    group3.orientation = "column"; 
    group3.alignChildren = ["left","center"]; 
    group3.spacing = 0; 
    group3.margins = 0; 

var edittext2 = group3.add('edittext {properties: {name: "edittext2"}}'); 
    edittext2.text = defaults[1]; 
    edittext2.preferredSize.width = 140; 

var edittext3 = group3.add('edittext {properties: {name: "edittext3"}}'); 
    edittext3.text = defaults[2]; 
    edittext3.preferredSize.width = 140; 

var edittext4 = group3.add('edittext {properties: {name: "edittext4"}}'); 
    edittext4.text = defaults[3]; 
    edittext4.preferredSize.width = 140; 

    var srcdossier = group3.add('edittext {properties: {name: "srcdossier"}}'); 
    srcdossier.text = defaults[4]; 
    srcdossier.preferredSize.width = 140;     

// PANEL3 Creer dans le system les dossiers 2
var panel3 = panel1.add("panel", undefined, undefined, {name: "panel3"}); 
    panel3.text = "Folder 2"; 
    panel3.orientation = "column"; 
    panel3.alignChildren = ["left","top"]; 
    panel3.spacing = 5; 
    panel3.margins = 10; 

// GROUP4
var group4 = panel3.add("group", undefined, {name: "group4"}); 
    group4.orientation = "row"; 
    group4.alignChildren = ["left","center"]; 
    group4.spacing = 2; 
    group4.margins = 0; 

var edittext5 = group4.add('edittext {properties: {name: "edittext5"}}'); 
    edittext5.text = defaults[5]; 
    edittext5.preferredSize.width = 190; 

// PANEL4 Creer dans le system les dossiers 3
var panel4 = panel1.add("panel", undefined, undefined, {name: "panel4"}); 
    panel4.text = "Folder 3"; 
    panel4.orientation = "column"; 
    panel4.alignChildren = ["left","top"]; 
    panel4.spacing = 5; 
    panel4.margins = 10; 

// GROUP5
var group5 = panel4.add("group", undefined, {name: "group5"}); 
    group5.orientation = "row"; 
    group5.alignChildren = ["left","center"]; 
    group5.spacing = 2; 
    group5.margins = 0; 

var edittext6 = group5.add('edittext {properties: {name: "edittext6"}}'); 
    edittext6.text = defaults[6]; 
    edittext6.preferredSize.width = 190; 

// PANEL5
var panel5 = group1.add("panel", undefined, undefined, {name: "panel5"}); 
    panel5.text = "After Effects"; 
    panel5.orientation = "column"; 
    panel5.alignChildren = ["left","top"]; 
    panel5.spacing = 30; 
    panel5.margins = 10; 


// PANEL6 AfterEffects Creer compo principale
var panel6 = panel5.add("panel", undefined, undefined, {name: "panel6"}); 
    panel6.text = "Master Comp"; 
    panel6.orientation = "column"; 
    panel6.alignChildren = ["left","top"]; 
    panel6.spacing = 10; 
    panel6.margins = 10; 

// GROUP6
var group6 = panel6.add("group", undefined, {name: "group6"}); 
    group6.orientation = "row"; 
    group6.alignChildren = ["left","center"]; 
    group6.spacing = 3; 
    group6.margins = 0; 

var edittext7 = group6.add('edittext {properties: {name: "edittext7"}}'); 
    edittext7.text = defaults[7]; 
    edittext7.preferredSize.width = 45; 

var statictext1 = group6.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "x"; 

var edittext8 = group6.add('edittext {properties: {name: "edittext8"}}'); 
    edittext8.text = defaults[8]; 
    edittext8.preferredSize.width = 45; 

var divider1 = group6.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

var edittext9 = group6.add('edittext {properties: {name: "edittext9"}}'); 
    edittext9.text = defaults[9]; 
    edittext9.preferredSize.width = 40; 

var statictext2 = group6.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "sec"; 

// PANEL7 After effects creer les dossiers dans le projet
var panel7 = panel5.add("panel", undefined, undefined, {name: "panel7"}); 
    panel7.text = "Project Folder"; 
    panel7.orientation = "column"; 
    panel7.alignChildren = ["left","top"]; 
    panel7.spacing = 10; 
    panel7.margins = 10; 

// GROUP7 
var group7 = panel7.add("group", undefined, {name: "group7"}); 
    group7.orientation = "row"; 
    group7.alignChildren = ["left","center"]; 
    group7.spacing = 2; 
    group7.margins = 0; 

var edittext10 = group7.add('edittext {properties: {name: "edittext10"}}'); 
    edittext10.text = defaults[10]; 
    edittext10.preferredSize.width = 50; 
    edittext10.alignment = ["left","top"]; 

// GROUP8
var group8 = group7.add("group", undefined, {name: "group8"}); 
    group8.orientation = "column"; 
    group8.alignChildren = ["left","center"]; 
    group8.spacing = 0; 
    group8.margins = 0; 

var edittext11 = group8.add('edittext {properties: {name: "edittext11"}}'); 
    edittext11.text = defaults[11]; 
    edittext11.preferredSize.width = 140; 

var edittext12 = group8.add('edittext {properties: {name: "edittext12"}}'); 
    edittext12.text = defaults[12]; 
    edittext12.preferredSize.width = 140; 

var edittext13 = group8.add('edittext {properties: {name: "edittext13"}}'); 
    edittext13.text = defaults[13]; 
    edittext13.enabled = true; 
    edittext13.preferredSize.width = 140; 

// GROUP9
var group9 = panel7.add("group", undefined, {name: "group9"}); 
    group9.orientation = "row"; 
    group9.alignChildren = ["left","center"]; 
    group9.spacing = 2; 
    group9.margins = 0; 

var edittext14 = group9.add('edittext {properties: {name: "edittext14"}}'); 
    edittext14.text = defaults[14]; 
    edittext14.preferredSize.width = 50; 
    edittext14.alignment = ["left","top"]; 

// GROUP10
var group10 = group9.add("group", undefined, {name: "group10"}); 
    group10.orientation = "column"; 
    group10.alignChildren = ["left","center"]; 
    group10.spacing = 0; 
    group10.margins = 0; 

var edittext15 = group10.add('edittext {properties: {name: "edittext15"}}'); 
    edittext15.text = defaults[15]; 
    edittext15.enabled = true; //false
    edittext15.preferredSize.width = 140;

    
// GROUPBTNFIN
var groupBtnFin = settingsWindow.add("group", undefined, {name: "groupBtnFin"});
    groupBtnFin.orientation = "row";
    groupBtnFin.alignChildren = ["left","center"];
    groupBtnFin.spacing = 100;
    groupBtnFin.margins = 0;

var resetButton = groupBtnFin.add("button", undefined, "Reset"); 
var saveButton = groupBtnFin.add("button", undefined, "Save"); 

   
///////// Btn Reset et Save /////////
resetButton.onClick = function() {
    defaultFile.open("w");
    defaultFile.write("src\rassets/audio\rassets/metrage\rassets/ai\rassets/\rexport\relements\r1920\r1080\r120\rassets\raudio\rmetrage\rai\rcompos\rprecomps");
    defaultFile.open();
    settingsWindow.close();
}

saveButton.onClick = function() {
    defaultFile.open("w");
    defaultFile.write(edittext1.text+"\r"+edittext2.text+"\r"+edittext3.text+"\r"+edittext4.text+"\r"+srcdossier.text+"\r"+ edittext5.text+"\r"+edittext6.text+"\r"+edittext7.text+"\r"+edittext8.text+"\r"+edittext9.text+"\r"+edittext10.text+"\r"+edittext11.text+"\r"+edittext12.text+"\r"+edittext13.text+"\r"+edittext14.text+"\r"+edittext15.text);
    defaultFile.open();
    settingsWindow.close();
}

settingsWindow.center();
settingsWindow.show();

} catch (e) {
    // Affiche un message d"erreur si une erreur est survenue
    alert("An error occurred: " + e.message);
}

};


// Affichage de la fenêtre de l"interface utilisateur
if ( uiWindow instanceof Window ) uiWindow.show();




// creer dossier seul
/*var folderPath2 = folderPath + "/" + Dossier2;
var folder2 = new Folder(folderPath2);
folder2.create();*/
