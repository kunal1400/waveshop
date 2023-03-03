import React, { useContext, useId } from 'react';
import Sketch from 'react-p5/';
import { Neon } from '../Model/Neon';
import p5Types from 'p5';
import { CanvasContext } from '@/context/canvasContext';

const Index: React.FC = () => {    
    const {state, dispatch} = useContext(CanvasContext);
    const {text, gridDefaultCanvasWidth, gridDefaultCanvasHeight} = state;
    const dynamicId = 'canvas' + useId();

    // Canvas variables
    let neon: Neon;
    const setup = (p: p5Types, dynamicId: Element) => {
        p.createCanvas(gridDefaultCanvasWidth, gridDefaultCanvasHeight).parent(dynamicId);
        p.pixelDensity(1);
        neon = new Neon(p);
        neon?.getTextGraphic({w: p.width, h: p.height, t: text});
        p.noLoop();
    }

    return <div role="generic" id={dynamicId}>
        <Sketch setup={setup}/>
    </div>
}

export default Index;