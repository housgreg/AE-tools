function organizeFolder() {
    var items = [];
    var aiFolder = findFolder("ai");
    var imageFolder = findFolder("images");
    var videoFolder = findFolder("videos");
    var audioFolder = findFolder("audio");
    var compsFolder = findFolder("comps");
    var precompsFolder = findFolder("pre-comps");

    // Store all items in the project array
    for (var i = 1; i <= app.project.numItems; i++) {
        items.push(app.project.item(i))
    }

    for (var i = 0; i <= items.length; i++) {
        var item = items[i];
        if (item instanceof FootageItem && item.file) {
            var file = new File(item.file.fsName);
            var extension = file.fsName.substring(file.fsName.lastIndexOf(".") + 1);
            if (extension == "ai") {
                item.parentFolder = aiFolder;
            } else if (extension == "jpg" || extension == "png" || extension == "psd") {
                item.parentFolder = imageFolder;
            } else if (extension == "mp3" || extension == "wav") {
                item.parentFolder = audioFolder;
            } else if (extension == "mp4" || extension == "mov" || extension == "avi") {
            item.parentFolder = videoFolder;
            }
        }
        //Ranger les compos dans le dossier "comps" sauf la compo qui est de couleur verte (label 9)
        if (item instanceof CompItem && item.label != 9) {
            item.parentFolder = compsFolder;
        }
        if (item instanceof CompItem && item.name.endsWith("- Comp 1")) {
            item.parentFolder = precompsFolder;
        }
    }

    //Ranger le dossier " Calques" dans le dossier "ai"
    for (var i = 0; i <= items.length; i++) {
        var item = items[i];
        if (item instanceof FolderItem && item.name.endsWith(" Calques")) {
            item.parentFolder = aiFolder;
        }
    }

    function findFolder(folderName) {
        for (var i = 1; i <= app.project.numItems; i++) {
            var item = app.project.item(i);
            if (item instanceof FolderItem && item.name == folderName) {
                return item;
            }
        }
        return null;
    }
}

organizeFolder();
