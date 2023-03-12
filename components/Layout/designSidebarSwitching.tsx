import { svgIconType } from "../../interfaces";
import UrlInput from "../InputComponents/UrlInput";

interface IDesignSidebarSwitching {
    iconName: svgIconType,
}

/**
 * Switching elements
 */
const DesignSidebarSwitching: React.FC<IDesignSidebarSwitching> = ({iconName}: IDesignSidebarSwitching) => {
    switch (iconName) {
        case 'svg_audio':
            return <AudioInputs/>
        break;
    
        default:
            return null;
        break;
    }
}

/**
 * All inputs for Audio input
 */
const AudioInputs: React.FC = () => {
    return <UrlInput label="Spotify URL" type={"text"} name={"spotify_url"} placeholder={"Enter spofity url"}  />
}

export default DesignSidebarSwitching;