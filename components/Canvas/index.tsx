import React, {useId, useRef } from "react";
import Sketch from "react-p5";
import p5 from "p5";
import { CanvasPropsInterface } from "../../interfaces";

function AudioCanvas({imgSrc, alt, width, height}: CanvasPropsInterface) {
    const canvasRef = useRef<HTMLDivElement | null>(null);
    const dynamicId = 'canvas' + useId();

    const setup = (p: p5, dynamicId: Element) => {
        p.createCanvas(width, height).parent(dynamicId);
        p.pixelDensity(1);
        p.loadImage(imgSrc, (loadedImage) => {
            p.image(loadedImage, 0, 0, p.width, p.height);
        })
    }

    // return <div 
    //     id={dynamicId} 
    //     className="h-full w-full object-cover object-center group-hover:opacity-75" 
    //     ref={canvasRef}
    // ><Sketch setup={setup} /></div>

    return <Sketch setup={setup} />
}

export default AudioCanvas;