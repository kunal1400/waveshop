export interface InitialStateInterface {
    text: string,
    gridDefaultCanvasWidth: number,
    gridDefaultCanvasHeight: number,
    backgroundColor: string,
    audio_url: string
    //wave settings
    thickness: number, 
    spacing: number, 
    sharpness: number,
    verticalSpace: number,
    horizontalSpace: number,
    height: number,
    waveformColorType: "image" | "solid",
    waveType: "linear" | "circle",
    colors:[[number, number, number]]
}

export const canvasData: InitialStateInterface = {
    text: "This is a long text that needs to be fitted within the canvas and I think it would be best why it is not coming in next line.\nThis is a long text that needs to be fitted within the canvas and I think it would be best why it is not coming in next line. This is a long text and it has$ This is a long text and it has$ This is a long text and it has$ This is a long text and it has$ the name of kunal This is a long text that needs to be fitted within the canvas and I think it would be best why it is not coming in next line.This is a long text that needs to be fitted within the canvas and I think it would be best why it is not coming in next line. \n\nThis is a long text and it has$ This is a long text and it has$ This is a long text and it has$ This is a long text and it has$ the name of kunal, This is a long text that needs to be fitted within the canvas and I think it would be best why it is not coming in next line.",
    gridDefaultCanvasWidth: 300,
    gridDefaultCanvasHeight: 300,
    backgroundColor: 'rgb(255, 255, 255)',
    audio_url: "https://giftawave.com/wp-content/uploads/2023/01/Aankhen-padho-Shayari.mp3",
    // wave settings
    thickness:2, 
    spacing :0, 
    sharpness:0.9,
    verticalSpace:0.1,
    horizontalSpace:0.1,
    height: 15,
    waveformColorType: "solid",
    waveType:"linear",
    colors:[[255,142,85]]
}