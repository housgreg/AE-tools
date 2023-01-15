//// Structure Folder AfterEffects /////
//// Version Beta 0.6 - By Greg /////

////// creer un fichier texte settings ////////
var targetFolder = new Folder(Folder.userData.fullName +"/"+ "Aescripts"+"/"+"StructureFolder");
!targetFolder.exists && targetFolder.create();

var defaults = [];
var defaultFile = File(targetFolder.fullName + "/" + "Settings_StructureFolder.txt");
    if(!defaultFile.exists) {
        defaultFile.open("w");
        defaultFile.write("src\rassets\rimages\rvideos\rai\raudios\rexports\relements\r1920\r1080\r120\rassets\rimages\rvideos\rai\raudios\rcomps\rpre-comps");
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
    group0.orientation = "column"; 
    group0.alignChildren = ["left","center"]; 
    group0.spacing = 5; 
    group0.margins = 0; 

// GROUPLIGNE1
var groupLigne1 = group0.add("group", undefined, {name: "groupLigne1"}); 
    groupLigne1.orientation = "row"; 
    groupLigne1.alignChildren = ["left","center"]; 
    groupLigne1.spacing = 0; 
    groupLigne1.margins = 0; 

// GROUPLIGNE2
var groupLigne2 = group0.add("group", undefined, {name: "groupLigne2"}); 
    groupLigne2.orientation = "row"; 
    groupLigne2.alignChildren = ["left","center"]; 
    groupLigne2.spacing = 0; 
    groupLigne2.margins = 0; 

// Ajout champ de texte pour le nom du dossier
var folderNameField = groupLigne1.add("edittext", [0, 0, 160, 25], "0000_Client_Type");

// Image boutons
var imgSettings_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%C3%B3%C3%BFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%05%C3%A0iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%209.0-c000%2079.171c27fab%2C%202022%2F08%2F16-22%3A35%3A41%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstRef%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceRef%23%22%20xmlns%3AstEvt%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceEvent%23%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Aphotoshop%3D%22http%3A%2F%2Fns.adobe.com%2Fphotoshop%2F1.0%2F%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3Aa5c64ca2-a541-4da7-94d8-0100b52f9b05%22%20xmpMM%3ADocumentID%3D%22xmp.did%3A0B79FB2FC55511EC95FECB1D6097022E%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A6dca8639-e01a-4ac6-b121-97b60d7351dc%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%2022.5%20(Macintosh)%22%20xmp%3ACreateDate%3D%222022-05-06T16%3A05%3A33%2B02%3A00%22%20xmp%3AModifyDate%3D%222023-01-11T19%3A09%3A35%2B01%3A00%22%20xmp%3AMetadataDate%3D%222023-01-11T19%3A09%3A35%2B01%3A00%22%20dc%3Aformat%3D%22image%2Fpng%22%20photoshop%3AColorMode%3D%223%22%3E%20%3CxmpMM%3ADerivedFrom%20stRef%3AinstanceID%3D%22xmp.iid%3Ace269a7f-025c-4fd0-97ed-26d81591ac86%22%20stRef%3AdocumentID%3D%22adobe%3Adocid%3Aphotoshop%3A63bc48f0-a9f9-b742-86ce-db79c04da5f5%22%2F%3E%20%3CxmpMM%3AHistory%3E%20%3Crdf%3ASeq%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A6dca8639-e01a-4ac6-b121-97b60d7351dc%22%20stEvt%3Awhen%3D%222023-01-11T19%3A09%3A35%2B01%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2024.1%20(Macintosh)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3C%2Frdf%3ASeq%3E%20%3C%2FxmpMM%3AHistory%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%C2%88%09s4%00%00%018IDAT8%C2%8D%C2%8D%C2%93%C2%BBJCA%14EW%12%C2%8D%C2%92B%C3%A2%C2%A3%10%C3%93(%C2%88X%C2%99%C3%82B%7C%C2%80%20%C2%88%C2%B5%C3%B8%0D%C2%A2%C3%81%7FH'%04%C3%BC%07-%C2%AC%14k%0B%11%C3%BC%07%C2%B1%09%C2%BE%3A%C2%AD%C2%B4H%13T%C3%8C%C2%B20W%C3%87%C3%89%C2%BD%C3%A0%C2%86%0B%C3%83%C2%99%C3%8D%C3%99k%C3%A6%C3%8CE%25%C3%A3k%C3%BA%C2%ABJ%C2%96%2F%C3%8F%C2%B7r%40%038%00%26%C2%80-%60%C2%92_m%03%C3%A3%40%0D8%06%C3%8A%3F%3B%C3%9DN%C2%8D%20%C3%AD%C3%95t%C2%BD%04%C3%ABKu%20%24%C3%A8%0B%C3%92%C2%86I%C3%97H%C2%B0%C3%AE%07%0C%09%C3%8AQB%C2%A2N%06%C3%8Djx%07%05%60%0D%18%0A%12Z%C3%80%1EP%056%C2%81%C3%9B%C2%88f%1D(%25%04%C3%97%C3%AA%7B%C2%94%C2%B0%1B%C3%9D%C3%B6%C2%BC%C3%9A%C2%8E%3C%C3%B7%C3%AA%0E%19%C3%98%C3%93%C3%B6%C2%8E%C3%AC.%C3%85%7B%C2%96%07%C3%9A%11%5E%0E%C2%98%C2%8Dj%15%60%2C%C2%AAu%C2%80%26%C3%9D%C2%B4z%C3%94%C2%B9%C2%A9.%C2%A8%C2%83%C3%AA%C2%94z%1E%C3%AD%C2%9F%C2%A8U%C2%B5%C2%98%C3%A0%C2%95%C3%AC%C2%9D%C3%82%C2%87%C3%BA%C2%A0%C2%B6R%C3%90%17%C2%93%C2%A3%25%0Dj%C3%AAg%C2%8A1KGj%C3%81%C3%A0!%C2%AD%C3%80%C3%8F%C3%BA%3FZ%06%C2%8A%C3%A1C%1AU%2F%C3%94%2BuC%C3%9D%C2%8F%C2%88N%C3%95u%C3%B5P%C2%BDQ%C3%A7%C3%A2%23%C2%A0%C3%A6%C3%BD%3B%C2%B6%C3%A7%C2%A0%C3%81LP%1F%08%7D%C3%A1%3F%C3%90%C2%890%C3%AB%C3%80%12%C3%B0%04%3C%06%C3%B5%C2%B7%C3%90%C3%B4%05%C2%A1TH%C3%B44%C2%A3e%C3%BC%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var imgCreate_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%13%00%00%00%10%08%06%00%00%00%C3%B4%C3%84Db%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%06%C2%AFiTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%209.0-c000%2079.171c27fab%2C%202022%2F08%2F16-22%3A35%3A41%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstRef%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceRef%23%22%20xmlns%3AstEvt%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceEvent%23%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Aphotoshop%3D%22http%3A%2F%2Fns.adobe.com%2Fphotoshop%2F1.0%2F%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3Aa5c64ca2-a541-4da7-94d8-0100b52f9b05%22%20xmpMM%3ADocumentID%3D%22xmp.did%3A0B79FB2FC55511EC95FECB1D6097022E%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A40310657-e9ef-4d33-930b-1871b3f21d00%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%2022.5%20(Macintosh)%22%20xmp%3ACreateDate%3D%222022-05-06T16%3A05%3A33%2B02%3A00%22%20xmp%3AModifyDate%3D%222023-01-14T13%3A08%3A47%2B01%3A00%22%20xmp%3AMetadataDate%3D%222023-01-14T13%3A08%3A47%2B01%3A00%22%20dc%3Aformat%3D%22image%2Fpng%22%20photoshop%3AColorMode%3D%223%22%3E%20%3CxmpMM%3ADerivedFrom%20stRef%3AinstanceID%3D%22xmp.iid%3Ace269a7f-025c-4fd0-97ed-26d81591ac86%22%20stRef%3AdocumentID%3D%22adobe%3Adocid%3Aphotoshop%3A63bc48f0-a9f9-b742-86ce-db79c04da5f5%22%2F%3E%20%3CxmpMM%3AHistory%3E%20%3Crdf%3ASeq%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A6dca8639-e01a-4ac6-b121-97b60d7351dc%22%20stEvt%3Awhen%3D%222023-01-11T19%3A09%3A35%2B01%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2024.1%20(Macintosh)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A40310657-e9ef-4d33-930b-1871b3f21d00%22%20stEvt%3Awhen%3D%222023-01-14T13%3A08%3A47%2B01%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2024.1%20(Macintosh)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3C%2Frdf%3ASeq%3E%20%3C%2FxmpMM%3AHistory%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%C3%96%C2%B9h%C2%BE%00%00%01%13IDAT8%C2%8D%C2%95%C2%93%C2%B1JCA%10EODH%23H%C2%B0%13%C2%AC%C3%AC%C3%BC%C2%82%C2%94%16vib%C3%A5%07%08%C2%82%C3%9D%C2%83%20%C2%A4%14%C3%B2%03)%C3%93%C3%9B%C3%B9%01~D%C2%AAT!)%14%0B%13%C2%B0I%1E%24%C2%82B%C2%92k%C2%91Y%7DYv%C2%93%C3%8D%C2%85eg%C3%9F%C3%9C%19%C3%AE%C3%9Ey%C2%8B%24%22%C2%AB.i%C2%A24%C3%8C%24%C3%9D%C2%95%24%11%C3%81%2B%C3%B0%09%3C%C3%87%08%05%C3%94%C2%80%C3%AA%C3%A1%16%C3%82%09%C3%B0%04%C2%B4%13%C2%9A%01%5C%1Dx%1F%C2%AEMQ%0E%1C%03M%C2%8BC%C2%AB%0F%5CnT%7B%3E%C2%A5z%C3%A4%C3%90%C2%B7%C2%BAL%C2%92%7Ce%C2%95%C2%80%C3%BC%1F%C2%A0%03%C2%84%C3%8C%3D-%1E%C3%BCf!%0C%C2%80%7B%C3%A0c%171%C2%A5%C2%99%C3%83j%17!6%C3%8D%050%C2%B2xl%C2%BBSV%02%C3%8El%C3%9F%C2%847%00%C2%87%C3%87-%3F3%C2%92%3A%C3%86%C3%8B%C2%8B%03%C2%88)%7B%00%C3%AA%16%0F%C2%81%1B%C3%A0%C2%85%7F%C3%83%2F%C2%82U%11eE%C3%B4%2C%C3%B7%1E%C3%88%7D%C3%9B-%C2%BA%C2%92%26%C3%BB%0C%20%C2%842%C2%90%C2%B1~-%C2%B7)%C3%8A%C2%BE%24%C2%B5%24-%039%C3%A7%19%C2%92%C3%B0%1F%C3%BA%0C8%C3%9AC%C3%99%1Bp%C3%AE%0E%C3%BE5%1B%C3%80%3C%C2%B1%C3%91%C3%94%C3%B8%7F%C3%B8%05%C3%A2%C3%88%7C%C2%89%C2%A2%C2%88xD%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var imgOrganize_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1A%00%00%00%11%08%06%00%00%00%C3%83%C2%8D%C2%BC%0D%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%06%C3%81iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%209.0-c000%2079.171c27fab%2C%202022%2F08%2F16-22%3A35%3A41%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstRef%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceRef%23%22%20xmlns%3AstEvt%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceEvent%23%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Aphotoshop%3D%22http%3A%2F%2Fns.adobe.com%2Fphotoshop%2F1.0%2F%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3Aa5c64ca2-a541-4da7-94d8-0100b52f9b05%22%20xmpMM%3ADocumentID%3D%22adobe%3Adocid%3Aphotoshop%3Aff63111d-6d28-f94a-8b3b-5ae1a201c080%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A15971f87-4bdf-4392-9336-2d0bb0996d93%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%2022.5%20(Macintosh)%22%20xmp%3ACreateDate%3D%222022-05-06T16%3A05%3A33%2B02%3A00%22%20xmp%3AModifyDate%3D%222023-01-14T14%3A12%3A03%2B01%3A00%22%20xmp%3AMetadataDate%3D%222023-01-14T14%3A12%3A03%2B01%3A00%22%20dc%3Aformat%3D%22image%2Fpng%22%20photoshop%3AColorMode%3D%223%22%3E%20%3CxmpMM%3ADerivedFrom%20stRef%3AinstanceID%3D%22xmp.iid%3Ace269a7f-025c-4fd0-97ed-26d81591ac86%22%20stRef%3AdocumentID%3D%22adobe%3Adocid%3Aphotoshop%3A63bc48f0-a9f9-b742-86ce-db79c04da5f5%22%2F%3E%20%3CxmpMM%3AHistory%3E%20%3Crdf%3ASeq%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A6dca8639-e01a-4ac6-b121-97b60d7351dc%22%20stEvt%3Awhen%3D%222023-01-11T19%3A09%3A35%2B01%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2024.1%20(Macintosh)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A15971f87-4bdf-4392-9336-2d0bb0996d93%22%20stEvt%3Awhen%3D%222023-01-14T14%3A12%3A03%2B01%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2024.1%20(Macintosh)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3C%2Frdf%3ASeq%3E%20%3C%2FxmpMM%3AHistory%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3EV%3B%C2%9F%C3%BF%00%00%01%04IDAT8%C2%8D%C3%AD%C3%95%C2%BDJ%03A%14%05%C3%A0%2Fb%C2%A9%C2%9D%C2%AD%C3%81%3C%40%10%5BI%11Q%C2%B1%C3%B2%05%C3%84J%1B%7B%7B%25y%01%1B%5B%C3%B5%0D%2C%7C%01%05%25%C2%AD%C2%85%C2%8D%C2%85%10%C2%89%C2%A5%60%C2%93%07X%C2%8B%C2%9D%C3%85a%C3%98%C2%815%C2%A0U%0E%5Cv%C3%AE%C2%B9%C3%839s%C3%B7%C3%A7n%C2%AB%C3%B7ZHp%C2%8F~%C2%94O%C2%B1%C2%837%3C%C2%A3%1D%C3%95%26%C3%98%C3%80W*%C2%92b%C2%A1%C2%86%C3%AB'%C3%B926%C3%91ML%C2%84%C2%BC%C2%8Bu%7C%C2%A2%C2%88%C3%A2.%C3%9E%C2%B8%C2%989%C3%805%1EC%C3%BD2p%C2%ADp%3D%C3%83%07V1%0C%C3%BC%16V%12%C2%8D%C3%BD%26FG!%C3%AA0%C3%8C%C3%B0%C3%AF%C2%A1V%C3%A0%10%C3%9BM%C2%8C%C3%AA%3A%C2%AAp%C2%AE%7C6m%0C%22~%0D%17a%C2%BD%C2%94%0A%C3%8E%C3%92%C3%91%20%C3%83%C2%8Fq%C2%AA%C3%AC%C3%A8%04%7BM%C2%8CfA%07%C2%B7%C2%B9b%C3%9D%5B%C3%B7'%C2%98%1B%C3%8D%C2%8D%C3%BE%C3%9F(%C3%B7%1D%5D%C3%A1%C3%89%C3%AF%26%C3%83%C3%98%C3%8Fx%3A%C3%80n%13%C2%A3%C3%A3%101%C2%AA%C3%BFI%3A%19*%C2%BE%C2%83%C2%9B%C2%8C%5E%C3%AD%C2%AD%7BH%C3%B2)FxQv%12c%12%C3%B8Q%C3%98%C2%97%C3%95%C3%B9%06S%C2%AC3.%C2%83j%C2%BF%C2%B7%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var imgExport_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1C%00%00%00%10%08%06%00%00%00%05%C3%8F%1F%C3%AF%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%06%C3%81iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%209.0-c000%2079.171c27fab%2C%202022%2F08%2F16-22%3A35%3A41%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstRef%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceRef%23%22%20xmlns%3AstEvt%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceEvent%23%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Aphotoshop%3D%22http%3A%2F%2Fns.adobe.com%2Fphotoshop%2F1.0%2F%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3Aa5c64ca2-a541-4da7-94d8-0100b52f9b05%22%20xmpMM%3ADocumentID%3D%22adobe%3Adocid%3Aphotoshop%3A6aecad24-830f-474a-8b15-bae1a7da679d%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3Acc2ccd40-bf8b-42cd-8f05-9bae89548700%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%2022.5%20(Macintosh)%22%20xmp%3ACreateDate%3D%222022-05-06T16%3A05%3A33%2B02%3A00%22%20xmp%3AModifyDate%3D%222023-01-14T14%3A11%3A31%2B01%3A00%22%20xmp%3AMetadataDate%3D%222023-01-14T14%3A11%3A31%2B01%3A00%22%20dc%3Aformat%3D%22image%2Fpng%22%20photoshop%3AColorMode%3D%223%22%3E%20%3CxmpMM%3ADerivedFrom%20stRef%3AinstanceID%3D%22xmp.iid%3Ace269a7f-025c-4fd0-97ed-26d81591ac86%22%20stRef%3AdocumentID%3D%22adobe%3Adocid%3Aphotoshop%3A63bc48f0-a9f9-b742-86ce-db79c04da5f5%22%2F%3E%20%3CxmpMM%3AHistory%3E%20%3Crdf%3ASeq%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A6dca8639-e01a-4ac6-b121-97b60d7351dc%22%20stEvt%3Awhen%3D%222023-01-11T19%3A09%3A35%2B01%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2024.1%20(Macintosh)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3Acc2ccd40-bf8b-42cd-8f05-9bae89548700%22%20stEvt%3Awhen%3D%222023-01-14T14%3A11%3A31%2B01%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2024.1%20(Macintosh)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3C%2Frdf%3ASeq%3E%20%3C%2FxmpMM%3AHistory%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%C3%A6%01%C2%B3%C3%9A%00%00%00%C3%BDIDAT8%C2%8D%C3%8D%C3%94%C2%BF.DA%14%C3%87%C3%B1%C3%8F%C2%95%25!%12%C3%9BJ4%2B%12%C2%8D(D%C2%A3%C2%90%C3%A8%C2%BD%01%0F%C2%A0%C2%92%C2%88M%C2%88R%3C%C2%80R%C2%A9%C3%B4%18%1EB!%1A%C2%95B%C2%89%25(%C3%BC)vd%C3%87uB%C3%B6%C2%B27~%C3%89%C3%A4%C3%A4%C3%8C7s~%C2%999%C2%93S%C2%9C%C2%B6%C3%9Fd%C3%BA%C2%94%C3%BC%C2%B1%0A%18%0A%C3%80%01Z%C2%A5%C2%B5%C2%91%C3%98y%C3%80Z%C3%A8%24%C2%BE%1A%C2%B0%C3%A3%C2%BCx%230%7C%C3%84Mi%C3%AF!%C3%85%C2%97%C2%80%C3%91%7B%C2%99N%C3%80%C2%9F%C3%B3%C2%A4%C3%B8%0FO%C3%BA%C2%93%C2%AE~%C3%A3Z%C3%85p%13k%C2%B8%C2%AE%C3%8B%10N0%C2%8BC%C3%9D%C2%BE%0E%C3%9C%10%C3%AE%C2%B0%C2%8D%05%5C%C3%96a%08%C2%93%C3%98%C3%85%C3%B4%C2%A0%0D%1B%C3%98%C3%82%C2%85n%3F%C3%BB%3A%C3%98%C2%AF%C2%96%C2%B0%C2%8F%C3%B9%0Ag%2B%19%C3%AET1%C3%BA%C3%8E%C3%B0Ii%3A%60%18cx%C3%95%1Bc%C2%B9%26R%C2%BC%C3%B7%C3%B5%C3%97%C2%8Eb%C3%A4%23%C2%89z%C2%B8%C2%87fi%C2%AD'v%16%C2%B0%26n%13_%0E%C3%98Q%5E%3C%C2%BA%C3%A1%0CVJ%7Bs)%C2%8E%07%2C%C2%AF%C2%B3%C2%98LrM%C3%A5I%C3%AD%C2%B3%C3%B4%1D%03%C2%8D.%3E6pu%C2%A9%00%00%00%00IEND%C2%AEB%60%C2%82"; 

var btnSettingsWindow = groupLigne1.add("iconbutton", undefined, File.decode(imgSettings_imgString), {name: "imgSettings", style: "toolbutton"});
    btnSettingsWindow.helpTip = "Settings";

var createButton = groupLigne2.add("iconbutton", undefined, File.decode(imgCreate_imgString), {name: "btnCreate", style: "toolbutton"});
    createButton.text = "Create Folders"; 
    createButton.helpTip = "Create Folders";
    createButton.preferredSize.width = 110; 

var divider0 = groupLigne2.add("panel", undefined, undefined, {name: "divider0"}); 
    divider0.alignment = "fill"; 

var btnOrganizeProject = groupLigne2.add("iconbutton", undefined, File.decode(imgOrganize_imgString), {name: "imgOrganize", style: "toolbutton"});
    btnOrganizeProject.helpTip = "Organizer Project"; 
    btnOrganizeProject.text = ""; 
    //btnOrganizeProject.preferredSize.width = 50; 

var btnRenderExport = groupLigne2.add("iconbutton", undefined, File.decode(imgExport_imgString), {name: "imgExport", style: "toolbutton"});
    btnRenderExport.helpTip = "Export Media Encoder";
    btnRenderExport.text = ""; 
    //btnRenderExport.preferredSize.width = 50; 


uiWindow.layout.layout(true);
uiWindow.layout.resize();
uiWindow.onResizing = uiWindow.onResize = function () { this.layout.resize(); }



///////////// Creer dossiers et fichier //////////////
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
    var Dossier1b = [foldersrc, defaults[1], defaults[2]];
    var Dossier1c = [foldersrc, defaults[1], defaults[3]];
    var Dossier1d = [foldersrc, defaults[1], defaults[4]];
    var Dossier1e = [foldersrc, defaults[1], defaults[5]];
    var Dossier2 = [defaults[6]];
    var Dossier3 = [defaults[7]];

    /////////
    var baseFolder1 = folderPath;
    var baseFolder1b = folderPath;
    var baseFolder1c = folderPath;
    var baseFolder1d = folderPath;
    var baseFolder1e = folderPath;
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
    for (var i = 0; i < Dossier1e.length; i++) {
        var folderName1e = Dossier1e[i];
        var folderPath1e = baseFolder1e.toString() + "/" + folderName1e;
        var folder1e = new Folder(folderPath1e); 
        folder1e.create();
        baseFolder1e = folder1e;
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
    var compW = parseInt(defaults[8]);
    var compH = parseInt(defaults[9]);
    var projName = app.project.file.name.replace(/.aep/gi,"_1.0");
    var masterComp = app.project.items.addComp(projName, compW, compH, 1, defaults[10], 25);
    masterComp.label = 9; //couleur du calque

    //Creation des dossiers Ae
    var folderAssets = app.project.items.addFolder(defaults[11]);
    folderAssets.items.addFolder (defaults[12]);
    folderAssets.items.addFolder (defaults[13]);
    folderAssets.items.addFolder (defaults[14]);
    folderAssets.items.addFolder (defaults[15]);
    var folderComps = app.project.items.addFolder(defaults[16]);
    folderComps.items.addFolder (defaults[17]);

    //Supprime les dossiers Ae en double
    var project = app.project;
    var folders = [];
    for (var i = 1; i <= project.numItems; i++) {
        var item = project.item(i);
        if (item instanceof FolderItem) {
            folders.push(item);
        }
    }
    var folderNames = {};
    folders.forEach(function(folder) {
        if (folderNames[folder.name]) {
            folder.remove();
        } else {
            folderNames[folder.name] = true;
        }
    });

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
        panel1.text = "System"; 
        panel1.orientation = "column"; 
        panel1.alignChildren = ["left","top"]; 
        panel1.spacing = 10; 
        panel1.margins = 10; 

    // PANEL2 Creer dans le system les dossiers 1
    var panel2 = panel1.add("panel", undefined, undefined, {name: "panel2"}); 
        panel2.text = "Folder Ae"; 
        panel2.orientation = "column"; 
        panel2.alignChildren = ["left","top"]; 
        panel2.spacing = 10; 
        panel2.margins = 10; 

    var edittextSrc = panel2.add('edittext {properties: {name: "edittextSrc"}}'); 
        edittextSrc.helpTip = "Source Folder"; 
        edittextSrc.text = defaults[0]; 
        edittextSrc.preferredSize.width = 190; 

    // GROUP2
    var group2 = panel2.add("group", undefined, {name: "group2"}); 
        group2.orientation = "row"; 
        group2.alignChildren = ["left","center"]; 
        group2.spacing = 2; 
        group2.margins = 0; 

    var caseAssetsDossier = group2.add('edittext {properties: {name: "caseAssetsDossier"}}'); 
        caseAssetsDossier.text = defaults[1]; 
        caseAssetsDossier.helpTip = "Assets Folder"; 
        caseAssetsDossier.preferredSize.width = 50; 
        caseAssetsDossier.alignment = ["left","top"]; 

    // GROUP3
    var group3 = group2.add("group", undefined, {name: "group3"}); 
        group3.orientation = "column"; 
        group3.alignChildren = ["left","center"]; 
        group3.spacing = 0; 
        group3.margins = 0; 

    var caseImageDossier = group3.add('edittext {properties: {name: "caseImageDossier"}}'); 
        caseImageDossier.text = defaults[2]; 
        caseImageDossier.helpTip = "Images: jpg, png, psd, pdf, heif, tif, tga, hdr";
        caseImageDossier.preferredSize.width = 140; 

    var caseVideoDossier = group3.add('edittext {properties: {name: "caseVideoDossier"}}'); 
        caseVideoDossier.text = defaults[3]; 
        caseVideoDossier.helpTip = "Videos: mp4, mov, m4v, gif, mpg, 3gp, avi, wmv";
        caseVideoDossier.preferredSize.width = 140; 

    var caseAiDossier = group3.add('edittext {properties: {name: "caseAiDossier"}}'); 
        caseAiDossier.text = defaults[4]; 
        caseAiDossier.helpTip = "Illustrator: ai"; 
        caseAiDossier.preferredSize.width = 140; 

        var caseAudioDossier = group3.add('edittext {properties: {name: "caseAudioDossier"}}'); 
        caseAudioDossier.text = defaults[5]; 
        caseAudioDossier.helpTip = "Audios: mp3, wav, aac, aif, m4a";
        caseAudioDossier.preferredSize.width = 140;     

    // PANEL3 Creer dans le system les dossiers 2
    var panel3 = panel1.add("panel", undefined, undefined, {name: "panel3"}); 
        panel3.text = "Folder Export"; 
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

    var caseExportDossier = group4.add('edittext {properties: {name: "caseExportDossier"}}'); 
        caseExportDossier.text = defaults[6]; 
        caseExportDossier.helpTip = "Export Videos";
        caseExportDossier.preferredSize.width = 190; 

    // PANEL4 Creer dans le system les dossiers 3
    var panel4 = panel1.add("panel", undefined, undefined, {name: "panel4"}); 
        panel4.text = "Folder Elements"; 
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

    var caseElementsDossier = group5.add('edittext {properties: {name: "caseElementsDossier"}}'); 
        caseElementsDossier.text = defaults[7]; 
        caseElementsDossier.helpTip = "Storyboard, Brief, Fonts, etc";
        caseElementsDossier.preferredSize.width = 190; 

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

    var caseCompWAe = group6.add('edittext {properties: {name: "caseCompWAe"}}'); 
        caseCompWAe.text = defaults[8]; 
        caseCompWAe.preferredSize.width = 45; 

    var statictext1 = group6.add("statictext", undefined, undefined, {name: "statictext1"}); 
        statictext1.text = "x"; 

    var caseCompHAe = group6.add('edittext {properties: {name: "caseCompHAe"}}'); 
        caseCompHAe.text = defaults[9]; 
        caseCompHAe.preferredSize.width = 45; 

    var divider1 = group6.add("panel", undefined, undefined, {name: "divider1"}); 
        divider1.alignment = "fill"; 

    var caseCompSecAe = group6.add('edittext {properties: {name: "caseCompSecAe"}}'); 
        caseCompSecAe.text = defaults[10]; 
        caseCompSecAe.preferredSize.width = 40; 

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

    var caseAssetsDossier0 = group7.add('edittext {properties: {name: "caseAssetsDossier0"}}'); 
        caseAssetsDossier0.text = defaults[11]; 
        caseAssetsDossier0.preferredSize.width = 50; 
        caseAssetsDossier0.alignment = ["left","top"]; 

    // GROUP8
    var group8 = group7.add("group", undefined, {name: "group8"}); 
        group8.orientation = "column"; 
        group8.alignChildren = ["left","center"]; 
        group8.spacing = 0; 
        group8.margins = 0; 

    var caseImagesAe = group8.add('edittext {properties: {name: "caseImagesAe"}}'); 
        caseImagesAe.text = defaults[12]; 
        caseImagesAe.helpTip = "Images: jpg, png, psd, pdf, heif, tif, tga, hdr"; 
        caseImagesAe.preferredSize.width = 140; 

    var caseVideoAe = group8.add('edittext {properties: {name: "caseVideoAe"}}'); 
        caseVideoAe.text = defaults[13]; 
        caseVideoAe.helpTip = "Videos: mp4, mov, m4v, gif, mpg, 3gp, avi, wmv"; 
        caseVideoAe.preferredSize.width = 140; 

    var caseAiAe = group8.add('edittext {properties: {name: "caseAiAe"}}'); 
        caseAiAe.text = defaults[14]; 
        caseAiAe.helpTip = "Illustrator: ai"; 
        caseAiAe.enabled = true; 
        caseAiAe.preferredSize.width = 140; 

        var caseAudioAe = group8.add('edittext {properties: {name: "caseAudioAe"}}'); 
        caseAudioAe.helpTip = "Audios: mp3, wav, aac, aif, m4a"; 
        caseAudioAe.text = defaults[15]; 
        caseAudioAe.preferredSize.width = 140; 


    // GROUP9
    var group9 = panel7.add("group", undefined, {name: "group9"}); 
        group9.orientation = "row"; 
        group9.alignChildren = ["left","center"]; 
        group9.spacing = 2; 
        group9.margins = 0; 

    var caseCompsAe = group9.add('edittext {properties: {name: "caseCompsAe"}}'); 
        caseCompsAe.text = defaults[16]; 
        caseCompsAe.helpTip = "Folder Composition"; 
        caseCompsAe.preferredSize.width = 50; 
        caseCompsAe.alignment = ["left","top"]; 


    // GROUP10
    var group10 = group9.add("group", undefined, {name: "group10"}); 
        group10.orientation = "column"; 
        group10.alignChildren = ["left","center"]; 
        group10.spacing = 0; 
        group10.margins = 0; 

    var casePrecompAe = group10.add('edittext {properties: {name: "casePrecompAe"}}'); 
        casePrecompAe.text = defaults[17]; 
        casePrecompAe.helpTip = "Folder Pre-composition"; 
        casePrecompAe.enabled = true; //false
        casePrecompAe.preferredSize.width = 140;
        
        
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
        defaultFile.write("src\rassets\rimages\rvideos\rai\raudios\rexports\relements\r1920\r1080\r120\rassets\rimages\rvideos\rai\raudios\rcomps\rpre-comps");
        defaultFile.open();
        settingsWindow.close();
    }

    saveButton.onClick = function() {
        defaultFile.open("w");
        defaultFile.write(edittextSrc.text+"\r"+caseAssetsDossier.text+"\r"+caseImageDossier.text+"\r"+caseVideoDossier.text+"\r"+caseAiDossier.text+"\r"+caseAudioDossier.text+"\r"+ caseExportDossier.text+"\r"+caseElementsDossier.text+"\r"+caseCompWAe.text+"\r"+caseCompHAe.text+"\r"+caseCompSecAe.text+"\r"+caseAssetsDossier0.text+"\r"+caseImagesAe.text+"\r"+caseVideoAe.text+"\r"+caseAiAe.text+"\r"+caseAudioAe.text+"\r"+caseCompsAe.text+"\r"+casePrecompAe.text); 
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

///////////// Range les fichiers et dossiers dans le projet //////////////
btnOrganizeProject.onClick = function () {
    app.beginUndoGroup("Organize Project");

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


    var imageFolder = findFolder(defaults[12]) || createFolder(defaults[12]);
    var videoFolder = findFolder(defaults[13]) || createFolder(defaults[13]);
    var aiFolder = findFolder(defaults[14]) || createFolder(defaults[14]);
    var audioFolder = findFolder(defaults[15]) || createFolder(defaults[15]);
    var compsFolder = findFolder(defaults[16]) || createFolder(defaults[16]);
    var precompsFolder = findFolder(defaults[17]) || createFolder(defaults[17]);

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
                    } else if (extension == "psd") {
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
            if (extension == "ai" || extension == "eps") {
                item.parentFolder = aiFolder;
            } else if (extension == "jpg" || extension == "jpeg" || extension == "png" || extension == "psd" || extension == "heif" || extension == "pdf" || extension == "tif" || extension == "tga" || extension == "hdr") {
                item.parentFolder = imageFolder;
            } else if (extension == "mp3" || extension == "wav" || extension == "aac" || extension == "aif" ||  extension == "aiff" || extension == "m4a") {
                item.parentFolder = audioFolder;
            } else if (extension == "mp4" || extension == "mov" || extension == "m4v" || extension == "mpg" || extension == "gif" || extension == "mxf" || extension == "3gp" || extension == "avi" || extension == "wmv") {
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
};

///////////// Export Media Encoder //////////////
btnRenderExport.onClick = function () {

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

    function ameRender(comp) {
        var bt = new BridgeTalk();
        var pathexport = "../" + defaults[6];  //"~/Desktop"
        var path = app.project.file.path+"/"+pathexport;
        if(!BridgeTalk.isRunning("ame")) {
            BridgeTalk.launch("ame", "background");
            //alert("Ouverture de Media Encoder");
            }
            var rqItem = app.project.renderQueue.items.add(comp);
            var module = rqItem.outputModule(1);
            module.file = File(path+"/"+comp.name);
            app.project.renderQueue.queueInAME(true); 
        }
    ameRender(app.project.activeItem);
    //system.callSystem("open " + app.project.file.path + "/" + "../" + defaults[6]);
};


// Affichage de la fenêtre de l"interface utilisateur
if ( uiWindow instanceof Window ) uiWindow.show();
