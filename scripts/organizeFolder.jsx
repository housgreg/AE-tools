function organizeFolder() {
    app.beginUndoGroup("Organize Project");
    
    var aiFolder = findFolder("ai") || createFolder("ai");
    var imageFolder = findFolder("images") || createFolder("images");
    var audioFolder = findFolder("audio") || createFolder("audio");
    var videoFolder = findFolder("videos") || createFolder("videos");
    var compsFolder = findFolder("comps") || createFolder("comps");
    var precompsFolder = findFolder("pre-comps") || createFolder("pre-comps");

    // Store all items in the project array
    var items = [];
    for (var i = 1; i <= app.project.numItems; i++) {
        items.push(app.project.item(i))
    }


    //Ranger le dossier " Calques" 
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item instanceof FolderItem && item.name.endsWith(" Calques")) {
            var hasAi = false;
            var hasImages = false;
            for (var j = 1; j <= item.numItems; j++) {
                var subItem = item.item(j);
                if (subItem instanceof FootageItem && subItem.file) {
                    var file = new File(subItem.file.fsName);
                    var extension = file.fsName.substring(file.fsName.lastIndexOf(".") + 1);
                    if (extension == "ai") {
                        hasAi = true;
                    } else if (extension == "jpg" || extension == "png" || extension == "psd") {
                        hasImages = true;
                    }
                }
            }
            if (hasAi && !hasImages) {
                item.parentFolder = aiFolder;
            } else if (!hasAi && hasImages) {
                item.parentFolder = imageFolder;
            }
        }
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
        var compRegExp = /- Comp \d+$/;
        if (item instanceof CompItem && item.name.match(compRegExp)) {
            item.parentFolder = precompsFolder;
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

    function createFolder(folderName){
        var newFolder = app.project.items.addFolder(folderName);
        return newFolder;
    }

    app.endUndoGroup();
}

organizeFolder();
