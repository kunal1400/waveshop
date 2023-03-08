import {DesignNavigation, DesignSidebar} from "../components/Layout";
import AudioCanvas from "../components/Canvas/AudioCanvas/Component";

export default function Index() {
    return <>
        <DesignNavigation/>
        <div className="flex flex-row">
            <DesignSidebar className="basis-1/4"/>
            <AudioCanvas className="basis-3/4" />
        </div>
        <div>FOOTER here we will use zoom x </div>
    </>
}