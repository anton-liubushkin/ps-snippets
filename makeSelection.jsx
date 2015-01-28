function makeSelection(x,y,sw,sh){
    app.activeDocument.selection.select([ [x,y], [x,y+sh], [x+sw,y+sh], [x+sw,y] ]);  
}

// x, y, width, height
// x & y position from top left corner of document 
// width & height of selection
// 
// makeSelection(10,50,200,100);