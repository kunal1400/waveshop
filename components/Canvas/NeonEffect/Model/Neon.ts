import p5Types from 'p5';

export interface ICanvasTextGraphics {
    w: number,
    h: number,
    t: string
}

export class Neon {
    sketch: p5Types;
    inputFontSize: number = 30;

    constructor(sketch: p5Types) {
        this.sketch = sketch;
    }

    getTextGraphic = ({w, h, t}: ICanvasTextGraphics) => {
        let textGraphics: p5Types.Graphics;
        textGraphics = this.sketch.createGraphics(w, h);
      
        //first push
        textGraphics.push();
        // It is necessary to set textSize & textLeading equal for proper calculations.
        textGraphics.textSize(this.inputFontSize);
        textGraphics.textLeading(this.inputFontSize);
        
        let textGraphicsWidth = textGraphics.width;
        let textGraphicsHeight = textGraphics.height;
        
        let tw = this.sketch.round(textGraphics.textWidth(t));
        // let tw = textToDisplay.length;  
        let ts = textGraphics.textSize();
        let numberOfLines = t.split(/\r\n|\r|\n/).length;  
        let currentRowInCanvas = this.sketch.round(tw/textGraphicsWidth) + numberOfLines;
        let maximumRowInCanvas = this.sketch.round(textGraphicsHeight/ts);
        
        if( currentRowInCanvas >= maximumRowInCanvas) {
          this.inputFontSize--;
          this.getTextGraphic({w, h, t});
        }
        
        textGraphics.noFill();
        textGraphics.stroke(0);
        textGraphics.strokeWeight(2);
        
        const tdc = textGraphics.drawingContext;
        textGraphics.drawingContext.shadowBlur = 10;
        textGraphics.drawingContext.shadowColor = 'black';
    
        textGraphics.textSize(this.inputFontSize);
        textGraphics.textLeading(this.inputFontSize);
        textGraphics.textAlign("center");
        textGraphics.text(t, 0, 0, textGraphicsWidth, textGraphicsHeight);
        
        textGraphics.remove();
        textGraphics.pop();
    
        this.sketch.imageMode("center");
        this.sketch.image(textGraphics, this.sketch.width/2, this.sketch.height/2);
    
        return textGraphics;
    }
}