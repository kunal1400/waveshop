import {DesignNavigation, DesignSidebar} from "../components/Layout";

export default function Index() {
    return <>
        <DesignNavigation/>
        <div className="flex">
            <DesignSidebar/>
            <div>Canvas</div>
        </div>
    </>
}