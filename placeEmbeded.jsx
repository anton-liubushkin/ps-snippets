function placeEmbeded(filePath) {
    var actDesc = new ActionDescriptor();
    actDesc.putPath( charIDToTypeID('null'), filePath );
    actDesc.putEnumerated( charIDToTypeID('FTcs'), charIDToTypeID('QCSt'), charIDToTypeID('Qcsa') );
    executeAction( charIDToTypeID('Plc '), actDesc, DialogModes.NO );
}

var filePath = new File (decodeURI('~/Downloads/Safari_logo.png'));

placeEmbeded(filePath);