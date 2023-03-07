import dynamic from "next/dynamic";
import {DesignNavigation, DesignSidebar} from "../components/Layout";

// Dynamically loading canvas because its api depend on window object
const NeonEffect = dynamic(() => import("../components/Canvas/NeonEffect/Component"), {
    ssr: false
})

export default function Index() {
    return <>
        <DesignNavigation/>
        <div className="flex">
            <DesignSidebar/>
            <NeonEffect/>
        </div>
    </>
}