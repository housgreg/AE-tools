//// Structure Folder AfterEffects /////
//// Version Beta 0.4 - By Greg /////
//// avec SyncFolder /////


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
var syncButton = group2.add("button", [0, 0, 110, 23], "Synchro dossier");
var syncButtonRefresh = group2.add("button", [0, 0, 110, 23], "Rafraichir dossier");



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
   

syncButton.onClick = function() {

    if(!$["_extAutomationBlocks"]) {
        alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
        throw new Error("could not find Automation Blocks API");
    }
    
(function(SyncImport){
    $._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
    var myResult;
    try {
        app.beginUndoGroup("Automation Blocks");
        myResult = JSON.stringify({status:"SUCCESS", data: eval("var numberA, numberB, path, bool, option, selectedFolder, subFolders, multiLayer, importImageSequence, deleteOthers, winIndex, basename, syncInfoString, selectedBinsList, multiLayerList, macIndex, index, targetBin, folderName, newBin;\n\n// Describe this function...\nfunction addSyncFolder() {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('Vu+tU|_^/E_dCFkgZ}iy');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('B5MgT[P7:z/23Y|3E2qH');\n  init();\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('bwXrwo{U|4@iiyNt*uND');\n\n  \t dialogResult = $._extAutomationBlocks.all.EsDialogs.showCustomDialog([{type:'CHOOSE_FOLDER', value:selectedFolder,label:'Select Folder'},{type:'DROPDOWN', value:subFolders,label:'Subfolders'},{type:'DROPDOWN', value:multiLayer,label:'Import multi-layer files as'},{type:'CHECKBOX', value:importImageSequence,label:'Import numbered still images as sequence'},{type:'CHECKBOX', value:deleteOthers,label:'Delete other items'}],{allowCancel:true});\n  \t if(!dialogResult) throw new Error(\"user canceled\");\n  \t selectedFolder=dialogResult[0];\n  subFolders=dialogResult[1];\n  multiLayer=dialogResult[2];\n  importImageSequence=dialogResult[3];\n  deleteOthers=dialogResult[4];\n  \t $._extAutomationBlocks.all.messageAboutExecuteBlock('$x}jbe4krfxfub4p7ZLf');\n  $._extAutomationBlocks.AeApp.saveSetting('syncFoldersImportLastUsedSubFolders',subFolders);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('v%ar![sXo~oA()gVb1nf');\n  $._extAutomationBlocks.AeApp.saveSetting('syncFoldersImportLastUsedMultiLayer',multiLayer);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('R?~J;tZ0Hkd_yb-5WFI2');\n  $._extAutomationBlocks.AeApp.saveSetting('syncFoldersImportLastUsedImageSequence',importImageSequence);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('0OXmD^Q9wNOIYY|i!$mD');\n  $._extAutomationBlocks.AeApp.saveSetting('syncFoldersImportLastUsedDeleteOthers',deleteOthers);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('yNNmIN~yy4.OvZc9D#gp');\n  if (!selectedFolder) {\n    return false;\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('+2JL8T.iZ0z]t%/g)4Xk');\n  $._extAutomationBlocks.AeApp.saveSetting('syncFoldersImportLastUsedFolder',selectedFolder);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('E344}v_H;,t$;nTbD|7k');\n  folderName = pathBasename(selectedFolder);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('XVMI%(|I3)!mUdDP;h.2');\n  $._extAutomationBlocks.all.log(targetBin);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('gr]vv:_$2L}|9Ph+m3ap');\n  $._extAutomationBlocks.all.log(selectedFolder);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('^AkI#sF(DR^:+^(`j[({');\n  $._extAutomationBlocks.AeProject.createBin(folderName,targetBin);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('1)K{B*Sc!A9(wECW}-EN');\n  newBin = [targetBin,'/',folderName].join('');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('f`2*67qzEo~t$^;bG[?P');\n  $._extAutomationBlocks.AeProject.syncBinWithFolder(newBin,selectedFolder, {subfolders: subFolders, imageSequence: importImageSequence, deleteItems:deleteOthers, importAs: multiLayer});\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('CKfSo(e3SsHN2*S=/IY0');\n  $._extAutomationBlocks.AeProjectItem.setAttribute(newBin, 'COMMENT', (getSyncInfoString(selectedFolder, subFolders, multiLayer, importImageSequence, deleteOthers)));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('Y+0W!UN$*oBpkH:-lG*;');\n  (function(){\n  \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString((['Folder was imported:' + '\\n' +\n  '',newBin,'  <-->  ',selectedFolder,'' + '\\n' +\n  'If the content of the folder changes, just run the tool ‘Synced Folders - Update’ to update the project bin accordingly.'].join('')));\n  \t\t\talert(message);\n\n  \t})();\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('}-FrT/59{kqFnvxB-Byn');\n  $._extAutomationBlocks.all.log('“Folder was imported\\\\nIf the content of the folder changes, just run the tool ‘Synced Folders - Update’ to update the project bin accordingly.”');\n}\n\n// Describe this function...\nfunction init() {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('V`_{G{fFF+pBP?Xy/B]I');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('d(2[1Uj};ig2CmPcEsq=');\n  subFolders = ['include', 'exclude', 'flatten'];\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('zz,!1U,~NBLWcxivr$3n');\n  multiLayerList = ['footage', 'comp', 'comp (cropped layers)'];\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('ItjG[2-t%QK-*z=a{Y({');\n  multiLayer = multiLayerList;\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('eIv3uKR-!oGN8[aOoN_w');\n  selectedFolder = ($._extAutomationBlocks.AeApp.getSetting('syncFoldersImportLastUsedFolder',''));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('bqQbYy#NVd^lJ84vOH0k');\n  importImageSequence = ($._extAutomationBlocks.AeApp.getSetting('syncFoldersImportLastUsedImageSequence',true));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('J:y5K!gpQx*M/E[*|@GO');\n  deleteOthers = ($._extAutomationBlocks.AeApp.getSetting('syncFoldersImportLastUsedDeleteOthers',false));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('_{YafX`I-%qT-eQ?80IZ');\n  targetBin = getSelectedBin();\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('l3+x9L4^=l$$$;??(!e_');\n  if (targetBin == null) {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('305-IbtLQZLdtjMoQu5J');\n    targetBin = ('');\n  }\n}\n\n// Describe this function...\nfunction max(numberA, numberB) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('B?Y_]cV=S2I2GWcdm^]`');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('k0cwL:oHBRjDazw{T~)j');\n  if (numberA > numberB) {\n    return numberA;\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('B?Y_]cV=S2I2GWcdm^]`');\n  return numberB;\n}\n\n// Describe this function...\nfunction pathBasename(path) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('n#z}r[IrJ3yPx^7=mJ1c');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('S]4FO^4:E499x|/O@FvU');\n  winIndex = path.lastIndexOf('\\\\') + 1;\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('GM^US[-f0SRwqvtIy_-o');\n  macIndex = path.lastIndexOf('/') + 1;\n  $._extAutomationBlocks.all.messageAboutExecuteBlock(';#0ecVLE0o$3mbB!S*q{');\n  index = max(winIndex, macIndex);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('+%.,T-Zad+fJ^99dU5FP');\n  basename = path.slice(((index + 1) - 1), path.length);\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('n#z}r[IrJ3yPx^7=mJ1c');\n  return basename;\n}\n\n// Describe this function...\nfunction getBooleanLetter(bool) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('q9:`!Z05_N-/[7C{C1#X');\n  return bool ? 'T' : 'F';\n}\n\n// Describe this function...\nfunction convertMultiLayerOpts(option) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('ISG!6luG61#~LeHQ[j$T');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('tO3h*[RXefdz0=@9[D!G');\n  if (option.length == 1) {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('?P7PI!:i_WWV*IC((@3a');\n    if (option == 'F') {\n      return multiLayerList[0];\n    }\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('*?|,+|Tj80{j*70D6u*c');\n    if (option == 'C') {\n      return multiLayerList[1];\n    }\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('eoLk.d;-C~HIG)06%D8y');\n    if (option == 'L') {\n      return multiLayerList[2];\n    }\n  } else {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('O2c02MjYdS.0iJ==]/X|');\n    if (option == multiLayerList[0]) {\n      return 'F';\n    }\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('$ZA.0j7^5t8)Gr3:h@C;');\n    if (option == multiLayerList[1]) {\n      return 'C';\n    }\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('*%d4vIQwHdq{@t9h0IL)');\n    if (option == multiLayerList[2]) {\n      return 'L';\n    }\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('ISG!6luG61#~LeHQ[j$T');\n  return null;\n}\n\n// Describe this function...\nfunction getSyncInfoString(selectedFolder, subFolders, multiLayer, importImageSequence, deleteOthers) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('ACNM=K,:!7Ksa+O}~0$_');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('r,du1:wS3f:,4EC2W)zN');\n  syncInfoString = ['SYNC TO ',selectedFolder,'_',subFolders.charAt(0).toUpperCase(),convertMultiLayerOpts(multiLayer),getBooleanLetter(importImageSequence),getBooleanLetter(deleteOthers)].join('');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('ACNM=K,:!7Ksa+O}~0$_');\n  return syncInfoString;\n}\n\n// Describe this function...\nfunction getSelectedBin() {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('fGB8x,%[EamYI$LvY*D=');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('**lr-W~]Cm5~Zzd{$0W@');\n  selectedBinsList = ($._extAutomationBlocks.AeProject.getAllItemsInAeBin((''),{recursively: true, onlySelected: (true),typeArray:[\"FolderItem\"], resultType:\"PATH\"}));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('(P{dl5{V,q%k5!v,9d[]');\n  if (selectedBinsList.length == 1) {\n    return selectedBinsList[0];\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('fGB8x,%[EamYI$LvY*D=');\n  return null;\n}\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('nGTcHf$V(!?m^+V?Mr(x');\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('wDSC?bFscStQ!EQgEGhp');\naddSyncFolder();\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('CTNeJlxNDbwvrl*:6?.f');\n")});
    }
    catch(err){
        myResult = JSON.stringify({status:"ERROR", data:""+err.message+" (line "+(err.line)+")"});
    }
    finally {
        app.endUndoGroup();
        try{
        $._extAutomationBlocks.all.abDestructor.notifyEndPointReached("main script");
        }
        catch(err){
            myResult = JSON.stringify({status:"ERROR", data:""+err.message+" (line "+(err.line)+")"});
        }
    }
    return myResult;
})(this)

  
   };

syncButtonRefresh.onClick = function() {

    if(!$["_extAutomationBlocks"]) {
        alert("Automation Blocks is not initialized. To run this script make sure the extension Automation Blocks is installed.");
        throw new Error("could not find Automation Blocks API");
    }
    
(function(thisObj){
    $._extAutomationBlocks.all.abDestructor.announceEndPoint("main script");
    var myResult;
    try {
        app.beginUndoGroup("Automation Blocks");
        myResult = JSON.stringify({status:"SUCCESS", data: eval("var option, optionLetters, letter, subFolders, curBin, multiLayerList, invalidOptions, multiLayer, importImageSequence, deleteOthers, comment, syncedFoldersText, syncedFolders, path, syncedFolder, options;\n\n// Describe this function...\nfunction updateSyncFolders() {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('id.3DikQ;^c9Wes]qjVN');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('#z$X;i,5.w?8ZMx}no5:');\n  init();\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('rSp:v)0RYI;6,;$n^AS.');\n  var curBin_list = $._extAutomationBlocks.AeProject.getAllItemsInAeBin((''),{recursively: true, onlySelected: (false),typeArray:[\"FolderItem\"]});\n  for (var curBin_index =0; curBin_index< curBin_list.length;curBin_index++) {\n    try { curBin = $._extAutomationBlocks.AeUtility.toPath(curBin_list[curBin_index]);}\n  \t\tcatch(e) {\n  \t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n  \t\t\tcontinue;\n  \t\t}\n  \t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('Ot;o{xk,VSTW!,%i[d.Z');\n    comment = ($._extAutomationBlocks.AeProjectItem.getAttribute(curBin, 'COMMENT'));\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('?r}bqhO110yS{/5!$M56');\n    if (comment.slice(0, 7) == 'SYNC TO') {\n      $._extAutomationBlocks.all.messageAboutExecuteBlock('}{AJ.uX^RVW?wU3yFFm7');\n      path = comment.slice(8, (comment.lastIndexOf('_') + 1) - 1);\n      $._extAutomationBlocks.all.messageAboutExecuteBlock('|IY|x.[kRH3}T(2a[]w-');\n      if (!($._extAutomationBlocks.all.EsFile.exists(path,{variant:\"FOLDER\"}))) {\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('38[DL8xZqJ-j0a=3Az1~');\n        $._extAutomationBlocks.all.log((String('Folder does not exist:' + '\\n' +\n        '') + String(path)));\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('*6;iCDlJ6__B,bn-pvU#');\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('rSp:v)0RYI;6,;$n^AS.');\n        continue;\n      }\n      $._extAutomationBlocks.all.messageAboutExecuteBlock('*$ophLi6z4^;!56$iK?0');\n      optionLetters = comment.slice(((comment.length - 3) - 1), comment.length);\n      $._extAutomationBlocks.all.messageAboutExecuteBlock('[ylTle0N;yfi/XrIn_v@');\n      options = parseOptionLetters(optionLetters);\n      $._extAutomationBlocks.all.messageAboutExecuteBlock('Ms9F!]x[dC-k;o3+ttrc');\n      if (invalidOptions) {\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('5Jfy8k-6o]5YADc]yM(7');\n        $._extAutomationBlocks.all.log('Invalid sync options');\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('GdQplF:wx0O9!vp,uDMc');\n        $._extAutomationBlocks.all.messageAboutExecuteBlock('rSp:v)0RYI;6,;$n^AS.');\n        continue;\n      }\n      $._extAutomationBlocks.all.messageAboutExecuteBlock('J)arkFNWXJk$uXD|+mJ-');\n      $._extAutomationBlocks.AeProject.syncBinWithFolder(curBin,path, {subfolders: subFolders, imageSequence: importImageSequence, deleteItems:deleteOthers, importAs: multiLayer});\n      $._extAutomationBlocks.all.messageAboutExecuteBlock('t62eB*qV]YOm}=6?4Sbp');\n      syncedFolders.push([curBin, path]);\n    }\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('rSp:v)0RYI;6,;$n^AS.');\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('p5rNPYiP2T@bo/Mw=!}G');\n  if (!!syncedFolders.length) {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock(';*JBV:=S0ht^I;:fFZB1');\n    syncedFoldersText = 'Synced folders:';\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('lrN9)X6BYy.tu28++8c4');\n    for (var syncedFolder_index =0; syncedFolder_index< syncedFolders.length;syncedFolder_index++) {\n      try { syncedFolder = syncedFolders[syncedFolder_index];}\n    \t\tcatch(e) {\n    \t\t\t$._extAutomationBlocks.all.log(\"skipped loop iteration:\"+e.message);\n    \t\t\tcontinue;\n    \t\t}\n    \t\t  $._extAutomationBlocks.all.messageAboutExecuteBlock('Nss1_0U3EU1|0#Re)CaP');\n      syncedFoldersText = [syncedFoldersText,'' + '\\n' +\n      '',syncedFolder[0],'  <-->  ',syncedFolder[1]].join('');\n      $._extAutomationBlocks.all.messageAboutExecuteBlock('lrN9)X6BYy.tu28++8c4');\n    }\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('ost(bU4Tp+x)ur5]b/ha');\n    (function(){\n    \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString(syncedFoldersText);\n    \t\t\talert(message);\n\n    \t})();\n  } else {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('PpdsPPrPp;~{vZbTt;.o');\n    (function(){\n    \t\t\tvar message = $._extAutomationBlocks.all.EsString.esToString(('There are no folders to sync.' + '\\n' +\n    'Please import a folder first using' + '\\n' +\n    '\"Synced Folder - Import\"'));\n    \t\t\talert(message);\n\n    \t})();\n  }\n}\n\n// Describe this function...\nfunction init() {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('V`_{G{fFF+pBP?Xy/B]I');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('d(2[1Uj};ig2CmPcEsq=');\n  subFolders = ['include', 'exclude', 'flatten'];\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('zz,!1U,~NBLWcxivr$3n');\n  multiLayerList = ['footage', 'comp', 'comp (cropped layers)'];\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('3OLx];qF]gz=rPwPyM7q');\n  invalidOptions = false;\n  $._extAutomationBlocks.all.messageAboutExecuteBlock(']MKi~UkL.L8CA$CPn@v1');\n  syncedFolders = [];\n}\n\n// Describe this function...\nfunction convertMultiLayerOpts(option) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('ISG!6luG61#~LeHQ[j$T');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('tO3h*[RXefdz0=@9[D!G');\n  if (option.length == 1) {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('?P7PI!:i_WWV*IC((@3a');\n    if (option == 'F') {\n      return multiLayerList[0];\n    }\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('*?|,+|Tj80{j*70D6u*c');\n    if (option == 'C') {\n      return multiLayerList[1];\n    }\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('eoLk.d;-C~HIG)06%D8y');\n    if (option == 'L') {\n      return multiLayerList[2];\n    }\n  } else {\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('O2c02MjYdS.0iJ==]/X|');\n    if (option == multiLayerList[0]) {\n      return 'F';\n    }\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('$ZA.0j7^5t8)Gr3:h@C;');\n    if (option == multiLayerList[1]) {\n      return 'C';\n    }\n    $._extAutomationBlocks.all.messageAboutExecuteBlock('*%d4vIQwHdq{@t9h0IL)');\n    if (option == multiLayerList[2]) {\n      return 'L';\n    }\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('Ymc$?qC(v_wVVU].c``g');\n  invalidOptions = true;\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('ISG!6luG61#~LeHQ[j$T');\n  return null;\n}\n\n// Describe this function...\nfunction parseOptionLetters(optionLetters) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('O(+w(Z7}SWyIGc.DXS7l');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('2vQZt0QX-um)?QmIQ1{o');\n  subFolders = parseSubFolderLetter(optionLetters.charAt(0));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('_Y_|Y13.+mmMDRgo|l$a');\n  multiLayer = convertMultiLayerOpts(optionLetters.charAt(1));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('G9Su5_3d$RV4M1+n5JTB');\n  importImageSequence = getBooleanFromLetter(optionLetters.charAt(2));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('0@F(ivIax5_.(!o+SVgd');\n  deleteOthers = getBooleanFromLetter(optionLetters.charAt(3));\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('O(+w(Z7}SWyIGc.DXS7l');\n  return [subFolders, multiLayer, importImageSequence, deleteOthers];\n}\n\n// Describe this function...\nfunction getBooleanFromLetter(letter) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('}m1nr6[Kii%]eg$hhHNW');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('TrdP/^*tU++)]u5.BAI8');\n  if (letter == 'T') {\n    return true;\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('esOUEn,0=[@wXXS|3r,d');\n  if (letter == 'F') {\n    return false;\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('c|?@.k_wc]WK{)EYkwpO');\n  invalidOptions = true;\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('}m1nr6[Kii%]eg$hhHNW');\n  return null;\n}\n\n// Describe this function...\nfunction parseSubFolderLetter(letter) {\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('%}VvU0oannp|fL?=H=k+');\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('Q@E.2%$v87l/FML[02/i');\n  if (letter == 'I') {\n    return 'include';\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('i_of5h~8[11w9S$sW?TV');\n  if (letter == 'E') {\n    return 'exclude';\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('2FWwO`yS}kI~S*s;fk!(');\n  if (letter == 'F') {\n    return 'flatten';\n  }\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('GW+wJ.=2r#phLhTuZF}o');\n  invalidOptions = true;\n  $._extAutomationBlocks.all.messageAboutExecuteBlock('%}VvU0oannp|fL?=H=k+');\n  return null;\n}\n\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('dZ-*y_oZt]O^yJ4d?(,R');\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('1{!#CBry!E.`W;sNJ4Bc');\nupdateSyncFolders();\n\n$._extAutomationBlocks.all.messageAboutExecuteBlock('V{o:4pQKvkH4/X3,x70C');\n")});
    }
    catch(err){
        myResult = JSON.stringify({status:"ERROR", data:""+err.message+" (line "+(err.line)+")"});
    }
    finally {
        app.endUndoGroup();
        try{
        $._extAutomationBlocks.all.abDestructor.notifyEndPointReached("main script");
        }
        catch(err){
            myResult = JSON.stringify({status:"ERROR", data:""+err.message+" (line "+(err.line)+")"});
        }
    }
    return myResult;
})(this)

  
   };
   

// Affichage de la fenêtre de l"interface utilisateur
if ( uiWindow instanceof Window ) uiWindow.show();