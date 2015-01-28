// --------------------
// This function make a clipping mask from active layer
// --------------------

function clippingMask() {
    var desc3 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    desc3.putReference(charIDToTypeID('null'), ref2);
    executeAction(charIDToTypeID('GrpL'), desc3, DialogModes.NO);
};