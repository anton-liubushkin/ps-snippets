// --------------------
// GROUP METHOD #1
// Get the list of multiple selected layers
//
// http://www.nekomataya.info/nekojyarashi/wiki.cgi?photoshop%CA%A3%BF%F4%A5%BB%A5%EC%A5%AF%A5%C8
// --------------------

function getSelectedLayers() {
    var idGrp = stringIDToTypeID("groupLayersEvent");
    var descGrp = new ActionDescriptor();
    var refGrp = new ActionReference();
    refGrp.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    descGrp.putReference(charIDToTypeID("null"), refGrp);
    executeAction(idGrp, descGrp, DialogModes.ALL);
    var resultLayers = new Array();
    for (var ix = 0; ix < app.activeDocument.activeLayer.layers.length; ix++) {
        resultLayers.push(app.activeDocument.activeLayer.layers[ix])
    }
    var id8 = charIDToTypeID("slct");
    var desc5 = new ActionDescriptor();
    var id9 = charIDToTypeID("null");
    var ref2 = new ActionReference();
    var id10 = charIDToTypeID("HstS");
    var id11 = charIDToTypeID("Ordn");
    var id12 = charIDToTypeID("Prvs");
    ref2.putEnumerated(id10, id11, id12);
    desc5.putReference(id9, ref2);
    executeAction(id8, desc5, DialogModes.NO);
    return resultLayers;
}

var groupedLayers = [];

groupedLayers = getSelectedLayers();

for (var z in groupedLayers) {
    var layer = groupedLayers[z];
    alert(layer.name);
}

// --------------------
// GROUP METHOD #2
// Get the list of multiple selected layers
// --------------------

function getSelectedLayers2() {
    var A = [];
    var desc11 = new ActionDescriptor();
    var ref9 = new ActionReference();
    ref9.putClass(stringIDToTypeID('layerSection'));
    desc11.putReference(charIDToTypeID('null'), ref9);
    var ref10 = new ActionReference();
    ref10.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    desc11.putReference(charIDToTypeID('From'), ref10);
    executeAction(charIDToTypeID('Mk  '), desc11, DialogModes.NO);
    var gL = activeDocument.activeLayer.layers;
    for (var i = 0; i < gL.length; i++) {
        A.push(gL[i]);
    }
    executeAction(charIDToTypeID('undo'), undefined, DialogModes.NO);
    return A;
};

var groupedLayers = [];

groupedLayers = getSelectedLayers2();

for (var z in groupedLayers) {
    var layer = groupedLayers[z];
    alert(layer.name);
}