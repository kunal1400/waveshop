import React, { useContext, useId } from 'react';
import Sketch from 'react-p5/';
import { Neon } from '../Model/Neon';
import p5Types from 'p5';
import { CanvasContext } from '@/context/canvasContext';

const Index: React.FC = () => {    
    const {state, dispatch} = useContext(CanvasContext);
    const {text} = state;
    const dynamicId = 'canvas' + useId();

    // Canvas variables
    let neon: Neon;
    let textGraphics: p5Types.Element | null = null;
    let width: number = 300;
    let height: number = 300;
    let graphicDimension: number = width - width/15;

    const setup = (p: p5Types, dynamicId: Element) => {
        p.createCanvas(width, height).parent(dynamicId);
        p.pixelDensity(1);
        neon = new Neon(p);
    }

    const draw = (p: p5Types) => {
        // p.push();
        // p.background(200);     
        // p.pop();
        p.push();
        neon?.getTextGraphic({w: p.width, h: p.height, t: "Hello World"});
        p.pop();        
    }

    return <div role="generic" id={dynamicId}>
        <Sketch setup={setup} draw={draw}/>
    </div>
}

export default Index;