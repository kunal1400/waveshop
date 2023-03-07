import {Container, DesignNavigation, DesignSidebar} from "../components/Layout";

export default function Index() {
    return <>
        <DesignNavigation/>
        <div className="grid grid-cols-2">
            <DesignSidebar/>
            <div>Canvas</div>
        </div>
        <Container>
            
        </Container>
    </>
}