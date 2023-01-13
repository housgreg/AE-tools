function organizeFolder() {
    var project = app.project;
    var aiFolder = findFolder("ai");
    var imageFolder = findFolder("images");
    var audioFolder = findFolder("audio");
    var compsFolder = findFolder("comps");
    var precompsFolder = findFolder("precomps");

    for (var i = 1; i <= project.numItems; i++) {
        var item = project.item(i);
        if (item instanceof FootageItem && item.file) {
            var file = new File(item.file.fsName);
            var extension = file.fsName.substring(file.fsName.lastIndexOf(".") + 1);
            if (extension == "ai") {
                item.parentFolder = aiFolder;
            } else if (extension == "jpg" || extension == "png" || extension == "psd") {
                item.parentFolder = imageFolder;
            } else if (extension == "mp3" || extension == "wav") {
                item.parentFolder = audioFolder;
            }
        }
        //Ranger les compos dans le dossier "comps" sauf la compo qui est de couleur verte (label 9)
        if (item instanceof CompItem && item.label != 9) {
            item.parentFolder = compsFolder;
        }
        if (item instanceof CompItem && item.name.endsWith("-comps")) {
            item.parentFolder = precompsFolder;
        }
    }

    //Ranger le dossier " Calques" dans le dossier "ai"
    for (var i = 1; i <= project.numItems; i++) {
        var item = project.item(i);
        if (item instanceof FolderItem && item.name.endsWith(" Calques")) {
            item.parentFolder = aiFolder;
        }
    }

    function findFolder(folderName) {
        for (var i = 1; i <= project.numItems; i++) {
            var item = project.item(i);
            if (item instanceof FolderItem && item.name == folderName) {
                return item;
            }
        }
        return null;
    }
}

organizeFolder();