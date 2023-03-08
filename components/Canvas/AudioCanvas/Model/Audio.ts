import p5Types from "p5";

export interface IAudioUtils {
    getRectangleWithShadow: () => void,
    applyShadow: () => void
}

class AudioUtils {
    sketch: p5Types;
    mic; 
    recorder; 
    soundFile;

    constructor(p: p5Types) {
        this.sketch = p;
        
        // create an audio in
        this.mic = new p.AudioIn();

        // users must manually enable their browser microphone for recording to work properly!
        this.mic.start();

        // create a sound recorder
        this.recorder = new p.SoundRecorder();

        // connect the mic to the recorder
        this.recorder.setInput(mic);

        // create an empty sound file that we will use to playback the recording
        this.soundFile = new p.SoundFile();
    }
}

export default AudioUtils;