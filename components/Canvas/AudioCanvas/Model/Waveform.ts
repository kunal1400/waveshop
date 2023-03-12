import p5Types from "p5";
import { InitialStateInterface } from "../../../../reducer/canvasData";

class Waveform {
    constructor(private sketch: p5Types, private levels, private canvasData: InitialStateInterface) {
        console.log(this.levels, "levels")
    }

    drawWaveform() {
        let {
            horizontalSpace,
            verticalSpace,
            waveType
        } = this.canvasData;

        this.sketch.push();

        // Setting Image mode to center
        this.sketch.imageMode(this.sketch.CENTER);

        //width and height for waveform
        let width = this.sketch.width * (1 - horizontalSpace * 2);
        let height = this.sketch.height * (1 - verticalSpace * 2);

        //create temporary variables for mask and background of mask
        let mask, backgroundForMask;

        //create linear waveform mask
        if (waveType === 'linear') {
            mask = this.createLinearWaveformMask(width, height);
        }

        //create a background for mask
        backgroundForMask = this.createBackgroundForMask(width, height);

        //mask image and display it on canvas
        backgroundForMask.mask(mask);
        this.sketch.image(backgroundForMask, this.sketch.width / 2, this.sketch.height / 2, width, height);

        //remove mask canvas from html
        mask.remove();

        this.sketch.pop();
    }

    //create linear waveform
    createLinearWaveformMask(graphicsWidth: number, graphicsHeight: number) {
        let sketch = this.sketch;
        let shape = sketch.createGraphics(graphicsWidth, graphicsHeight);
        let levels = this.levels;
        let {
            thickness, 
            spacing, 
            sharpness,
            height
        } = this.canvasData

        //waveform push and translate
        shape.push();

        //give mask no stroke and no fill
        shape.noStroke();
        shape.fill(0)

        let cspacing = Number(spacing) + Number(thickness);

        for (let x = 0; x < graphicsWidth; x += cspacing) {
            let i = Math.ceil(levels.length * (x / graphicsWidth));
            let h = (shape.constrain(levels[i] * 1, 0, 1) * height) / 2;
            var _h = h * height
            shape.rect(x, (height / 2) - _h, thickness, 2 * _h, thickness / 2 * sharpness);
        }

        //waveform pop
        shape.pop();

        //returns graphic object for a mask
        return shape;
    }

    createBackgroundForMask(graphicsWidth: number, graphicsHeight: number) {
        let { waveformColorType, colors } = this.canvasData

        //create p5.Image object
        let backgroundForMask = this.sketch.createImage(graphicsWidth, graphicsHeight);

        //create a waveform with a solid color as background
        if (waveformColorType === 'solid') {
            //load pixels to object
            backgroundForMask.loadPixels();

            //color the pixels
            for (let i = 0; i < backgroundForMask.width; i++) {
                for (let j = 0; j < backgroundForMask.height; j++) {
                    backgroundForMask.set(i, j, [...colors[0], 255]); //alpha will be added somewhere here
                }
            }
            //update the pixels in object
            backgroundForMask.updatePixels();
        }

        //return background for mask object
        return backgroundForMask;
    }

}

export default Waveform;