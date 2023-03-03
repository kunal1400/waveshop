import p5Types from 'p5';

export interface ICanvasTextGraphics {
    w: number,
    h: number,
    t: string
}

export class Neon {
    sketch: p5Types;
    inputFontSize: number = 30;
    textGraphics: p5Types.Graphics;

    constructor(sketch: p5Types) {
        this.sketch = sketch;
        this.textGraphics = this.sketch.createGraphics(sketch.width, sketch.height);
    }

    getTextGraphic = ({w, h, t}: ICanvasTextGraphics) => {
        //first push
        this.textGraphics.push();
        // It is necessary to set textSize & textLeading equal for proper calculations.
        this.textGraphics.textSize(this.inputFontSize);
        this.textGraphics.textLeading(this.inputFontSize);
        
        let textGraphicsWidth = this.textGraphics.width;
        let textGraphicsHeight = this.textGraphics.height;
        
        let tw = this.sketch.round(this.textGraphics.textWidth(t));
        // let tw = textToDisplay.length;  
        let ts = this.textGraphics.textSize();
        let numberOfLines = t.split(/\r\n|\r|\n/).length;  
        let currentRowInCanvas = this.sketch.round(tw/textGraphicsWidth) + numberOfLines;
        let maximumRowInCanvas = this.sketch.round(textGraphicsHeight/ts);
        
        if( currentRowInCanvas >= maximumRowInCanvas) {
          this.inputFontSize--;
          this.getTextGraphic({w, h, t});
        }
        
        this.textGraphics.noFill();
        this.textGraphics.stroke(0);
        this.textGraphics.strokeWeight(2);
        
        // Get the drawing context of the buffer
        const context = this.textGraphics.drawingContext as CanvasRenderingContext2D;
        context.shadowBlur = 10;
        context.shadowColor = 'black';
    
        this.textGraphics.textSize(this.inputFontSize);
        this.textGraphics.textLeading(this.inputFontSize);
        this.textGraphics.textAlign("center");
        this.textGraphics.text(t, 0, 0, textGraphicsWidth, textGraphicsHeight);
        
        this.textGraphics.remove();
        this.textGraphics.pop();
    
        this.sketch.imageMode("center");
        this.sketch.image(this.textGraphics, this.sketch.width/2, this.sketch.height/2);
    
        return this.textGraphics;
    }
}