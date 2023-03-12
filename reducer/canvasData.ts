export interface InitialStateInterface {
    audio_url: string,
    text: string,
    gridDefaultCanvasWidth: number,
    gridDefaultCanvasHeight: number,

    // Background Color settings
    canvas_background_type: 'image' | 'solid',    
    canvas_background_color: string,
    canvas_background_image: string,

    //wave settings
    canvas_wave_background_image: string,
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
    audio_url: "https://giftawave.com/wp-content/uploads/2023/01/Aankhen-padho-Shayari.mp3",
    gridDefaultCanvasWidth: 480,
    gridDefaultCanvasHeight: 480,

    // Background Image settings
    canvas_background_type: 'image',
    canvas_background_color: 'rgb(250, 245, 235)',
    canvas_background_image: "https://d3esu2709a5jcn.cloudfront.net/gaw-live/2023/02/12059543_4871703-scaled.jpg",
    canvas_wave_background_image:"https://giftawave.com/wp-content/plugins/wave-canvas/public/canvasBgImages/blue-yellow.jpg",

    // wave settings
    thickness: 3, 
    spacing: 1, 
    sharpness: 0.9,
    verticalSpace: 0.1,
    horizontalSpace: 0.1,
    height: 1,
    waveformColorType: "solid",
    waveType: "linear",
    colors: [[255, 142, 85]]
}