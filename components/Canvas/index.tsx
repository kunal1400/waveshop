import React, {useContext, useId, useRef } from "react";
import Sketch from "react-p5";
import p5 from "p5";
import { CanvasPropsInterface } from "../../interfaces";
import { CanvasContext } from "../../context/canvasContext";
import { getTextGraphic } from "./utils";


function AudioCanvas({imgSrc, alt, width, height}: CanvasPropsInterface) {
    const {state, dispatch} = useContext(CanvasContext);
    const {text} = state;
    const dynamicId = 'canvas' + useId();

    // Canvas variables
    let textGraphics: p5.Element | null = null;
    let graphicDimension: number = width - width/15;

    const setup = (p: p5, dynamicId: Element) => {
        p.createCanvas(width, height).parent(dynamicId);
        p.pixelDensity(1);
        
        // p.loadImage(imgSrc, (loadedImage) => {
        //     p.image(loadedImage, 0, 0, width, height);
        // })

        p.background(200);
        // p.textSize(60);
        // p.textAlign("center", "center");
        textGraphics = getTextGraphic({p, w: graphicDimension, h: graphicDimension, t: text});
        
        p.imageMode("center");
        p.image(textGraphics, width/2, height/2);
    }

    const draw = (p: p5) => {        
        // p.textFont("Coiny");
        // p.textSize(30);
        // p.textLeading(30);
        
        // let textGraphics = getTextGraphic({p, w: width, h: height, t: text});
        // p.image(textGraphics, 0, 0, width, height);
        // p.noLoop();
    }

    return <div role="generic" id={dynamicId}>
        <Sketch setup={setup} draw={draw} />
    </div>
}

export default AudioCanvas;