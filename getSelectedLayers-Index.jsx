function getSelectedLayersIdx() {
    var selectedLayers = new Array;
    var ref = new ActionReference();
    ref.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    var desc = executeActionGet(ref);
    if (desc.hasKey(stringIDToTypeID('targetLayers'))){
        desc = desc.getList(stringIDToTypeID('targetLayers'));
        var c = desc.count
        var selectedLayers = new Array();
        for (var i=0;i<c;i++){
            try {
                activeDocument.backgroundLayer;
                selectedLayers.push(desc.getReference(i).getIndex());
            } catch(e) {
                selectedLayers.push(desc.getReference(i).getIndex()+1);
            }
        }
    } else {
        var ref = new ActionReference();
        ref.putProperty( charIDToTypeID("Prpr"), charIDToTypeID("ItmI"));
        ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        try {
            activeDocument.backgroundLayer;
            selectedLayers.push(executeActionGet(ref).getInteger(charIDToTypeID("ItmI"))-1);
        } catch(e) {
            selectedLayers.push(executeActionGet(ref).getInteger(charIDToTypeID("ItmI")));
        }
    }
    return selectedLayers;
}

function makeActiveByIndex(idx, visible){
    for (var i = 0; i < idx.length; i++){
        var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putIndex(charIDToTypeID("Lyr "), idx[i])
        desc.putReference(charIDToTypeID("null"), ref);
    if (i > 0) {
        var idselectionModifier = stringIDToTypeID("selectionModifier");
        var idselectionModifierType = stringIDToTypeID("selectionModifierType");
        var idaddToSelection = stringIDToTypeID("addToSelection");
        desc.putEnumerated(idselectionModifier, idselectionModifierType, idaddToSelection);
    }
        desc.putBoolean(charIDToTypeID("MkVs"), visible);
        executeAction(charIDToTypeID("slct"), desc, DialogModes.NO);
    }
}

// Make an array of selected layers
var sl = getSelectedLayersIdx();
var sLayers = new Array();
for (var i = 0, l = sl.length; i < l; i++) {
    makeActiveByIndex([sl[i]], false);
    sLayers.push(activeDocument.activeLayer);
}

// Loop through each selected layer and assign an image
for (var i = 0, l = sLayers.length; i < l; ++i) {
  var myLayer = sLayers[i];
  activeDocument.activeLayer = myLayer;
  alert(myLayer.name);
}