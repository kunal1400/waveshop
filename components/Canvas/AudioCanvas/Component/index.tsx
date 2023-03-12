import { useContext, useId } from "react";
import dynamic from "next/dynamic";
import { CanvasContext } from "../../../../context/canvasContext";
import Waveform from "../Model/Waveform";
import Sound from "../Model/Sound";
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

// Set the playback rate. 1.0 is normal, .5 is half-speed, 2.0 is twice as fast.
const playBackRate = 1.0;

// Must be a power of two between 16 and 1024
const fftBins = 1024;

const AudioCanvas: React.FC<IAudioCanvas> = ({className}: IAudioCanvas) => {
    const {state} = useContext(CanvasContext);
    const {gridDefaultCanvasWidth, gridDefaultCanvasHeight, audio_url} = state;
    const dynamicId = 'canvas' + useId();
    let waveForm: Waveform;    

    const setup = (p:p5Types, dynamicId: Element) => {
        let cnv = p.createCanvas(gridDefaultCanvasWidth, gridDefaultCanvasHeight).parent(dynamicId);
        p.pixelDensity(1);
        p.noLoop();

        p.loadSound(audio_url, (ls) => {
            p.loadImage( state.canvas_background_image, (canvasBackgroundImage: p5Types.Image) => {
                p.loadImage( state.canvas_wave_background_image, (canvasWaveBackgroundImage: p5Types.Image) => {
                    // Creating sound instance after all resources loaded
                    const wfs = new Sound(p, ls, state)

                    // Creating waveform Instance after all resource loaded
                    waveForm = new Waveform( p, 
                        wfs.getPeaksArrayFromAmplitude(), 
                        canvasBackgroundImage, 
                        canvasWaveBackgroundImage, 
                        state
                    );
                    
                    waveForm.drawWaveform();
                })
            })            
        })
    }

    return <div role="generic" id={dynamicId} className={`${className} bg-gray-200 pt-6`}>
        <Sketch className={`h-screen`} setup={setup} />
    </div>
}

export default AudioCanvas;