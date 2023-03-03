import p5Types from "p5";

export interface IBorderUtils {
    getRectangleWithShadow: () => void,
    applyShadow: () => void
}

class BorderUtils {
    sketch: p5Types;

    constructor(p: p5Types) {
        this.sketch = p;
    }

    getRectangleWithShadow() {
        this.sketch.noFill();
        this.sketch.rectMode("center");
        this.sketch.stroke("red");
        this.sketch.strokeWeight(5);
        this.applyShadow();
        this.sketch.rect(this.sketch.width/2, this.sketch.height/2, this.sketch.width/2, this.sketch.height/2);
    }

    applyShadow() {
        // Get the drawing context of the buffer
        const context = this.sketch.drawingContext as CanvasRenderingContext2D;
        context.shadowOffsetX = 10;
        context.shadowOffsetY = 10;
        context.shadowBlur = 20;
        context.shadowColor = 'black';
    }
}

export default BorderUtils;