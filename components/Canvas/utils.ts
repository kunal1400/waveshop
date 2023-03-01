import { CanvasTextGraphicsInterface } from "../../interfaces";

let inputFontSize = 30; 

/**
 * This will return the text graphics benefit of it is
 * 1. Auto adjust "\n\r"
 * 2. Adjust with any width and height
 */
export const getTextGraphicWorking = ({p, w, h, t}: CanvasTextGraphicsInterface) => {
    let textGraphics = p.createGraphics(w, h);
    let textGraphicsWidth = textGraphics.width;
    let textGraphicsHeight = textGraphics.height;
    // textGraphics.textFont("Coiny");
    // textGraphics.textSize(30);
    // textGraphics.textLeading(30);
    // textGraphics.textWrap()
    textGraphics.text(t, 0, 0, textGraphicsWidth, textGraphicsHeight);
    return textGraphics;
}

/**
 * In draw it is not working properly but in setup it is working properly,
 * because graphics overlaping in loop
 */
export const getTextGraphic = ({p, w, h, t}: CanvasTextGraphicsInterface) => {
    let textGraphics = p.createGraphics(w, h);
  
    // It is necessary to set textSize & textLeading equal for proper calculations.
    textGraphics.textSize(inputFontSize);
    textGraphics.textLeading(inputFontSize);
    
    let textGraphicsWidth = textGraphics.width;
    let textGraphicsHeight = textGraphics.height;
    
    let tw = p.round(textGraphics.textWidth(t));
    // let tw = textToDisplay.length;  
    let ts = textGraphics.textSize();
    let numberOfLines = t.split(/\r\n|\r|\n/).length;  
    let currentRowInCanvas = p.round(tw/textGraphicsWidth) + numberOfLines;
    let maximumRowInCanvas = p.round(textGraphicsHeight/ts);
    
    if( currentRowInCanvas >= maximumRowInCanvas) {
      inputFontSize--;
      getTextGraphic({p, w, h, t});
    }
    
    textGraphics.noFill();
    textGraphics.stroke(0);
    textGraphics.strokeWeight(2);
    
    const tdc = textGraphics.drawingContext;
    textGraphics.drawingContext.shadowBlur = 10;
    textGraphics.drawingContext.shadowColor = 'black';

    textGraphics.textSize(inputFontSize);
    textGraphics.textLeading(inputFontSize);
    textGraphics.textAlign("center");
    textGraphics.text(t, 0, 0, textGraphicsWidth, textGraphicsHeight);
    return textGraphics;
}