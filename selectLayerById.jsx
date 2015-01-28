// --------------------
// selectLayerById(5); only this layer is selected
// selectLayerById(6,true); this will add this layer to allready selected layer(s)
//
// http://www.ps-bridge-scripts.talktalk.net/
// --------------------

function selectLayerById(id, add) {
    var ref = new ActionReference();
    ref.putIdentifier(charIDToTypeID('Lyr '), id);
    var desc = new ActionDescriptor();
    desc.putReference(charIDToTypeID("null"), ref);
    if (add) desc.putEnumerated(stringIDToTypeID("selectionModifier"), stringIDToTypeID("selectionModifierType"), stringIDToTypeID("addToSelection"));
    desc.putBoolean(charIDToTypeID("MkVs"), false);
    try {
        executeAction(charIDToTypeID("slct"), desc, DialogModes.NO);
    } catch (e) {}
};