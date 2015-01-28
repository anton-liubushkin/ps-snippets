// --------------------
// selectLayerByIndex(5); only this layer is selected
// selectLayerByIndex(6,true); this will add this layer to allready selected layer(s)
//
// http://www.ps-bridge-scripts.talktalk.net/
// --------------------

function selectLayerByIndex(index, add) {
    var ref = new ActionReference();
    ref.putIndex(charIDToTypeID("Lyr "), index);
    var desc = new ActionDescriptor();
    desc.putReference(charIDToTypeID("null"), ref);
    if (add) desc.putEnumerated(stringIDToTypeID("selectionModifier"), stringIDToTypeID("selectionModifierType"), stringIDToTypeID("addToSelection"));
    desc.putBoolean(charIDToTypeID("MkVs"), false);
    try {
        executeAction(charIDToTypeID("slct"), desc, DialogModes.NO);
    } catch (e) {}
};