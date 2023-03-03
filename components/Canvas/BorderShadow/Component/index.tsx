import Sketch from "react-p5";
import p5Types from "p5";
import { useContext, useId } from "react";
import BorderUtils from "../Model/BorderShadow";
import { CanvasContext } from "../../../../context/canvasContext";

const BorderShadow: React.FC = () => {
    const {state} = useContext(CanvasContext);
    const {gridDefaultCanvasWidth, gridDefaultCanvasHeight} = state;
    const dynamicId = 'canvas' + useId();
    let borderUtils: BorderUtils;

    const setup = (p: p5Types, dynamicId: Element) => {
        p.createCanvas(gridDefaultCanvasWidth, gridDefaultCanvasHeight).parent(dynamicId);
        p.pixelDensity(1);
        borderUtils = new BorderUtils(p);
        borderUtils.getRectangleWithShadow();
        p.noLoop();
    }

    return <div role="generic" id={dynamicId}>
        <Sketch setup={setup} />
    </div>
}

export default BorderShadow;