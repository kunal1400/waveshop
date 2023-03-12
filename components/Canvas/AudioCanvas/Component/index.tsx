import { useContext, useId } from "react";
import dynamic from "next/dynamic";
import { CanvasContext } from "../../../../context/canvasContext";
import Waveform from "../Model/Waveform";
import WaveFormSound from "../Model/Sound";
import p5Types from "p5";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => {
        // importing sound lib ONLY AFTER REACT-P5 is loaded
        require('p5/lib/addons/p5.sound');
        // returning react-p5 default export
        return mod.default
    }), 
    { ssr: false }
);

interface IAudioCanvas {
    className: string
}

const AudioCanvas: React.FC<IAudioCanvas> = ({className}: IAudioCanvas) => {
    const {state} = useContext(CanvasContext);
    const {gridDefaultCanvasWidth, gridDefaultCanvasHeight, backgroundColor, audio_url} = state;
    const dynamicId = 'canvas' + useId();
    let waveForm: Waveform;

    const setup = (p:p5Types, dynamicId: Element) => {
        let cnv = p.createCanvas(gridDefaultCanvasWidth, gridDefaultCanvasHeight).parent(dynamicId);
        p.pixelDensity(1);
        p.background(backgroundColor);
        p.noLoop();

        p.loadSound(audio_url, (ls) => {
            const wfs = new WaveFormSound(p, ls, state)
            waveForm = new Waveform(p, wfs.getPeaksArrayFromAmplitude(), state);
            waveForm.drawWaveform();
            console.log(ls, "sound loaded")
        })
    }

    return <div role="generic" id={dynamicId} className={`${className} bg-gray-200`}>
        <Sketch className={`h-screen`} setup={setup} />
    </div>
}

export default AudioCanvas;