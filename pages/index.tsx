import {Container, DesignNavigation} from "../components/Layout";

export default function Index() {
    return <>
        <DesignNavigation/>
        <Container>
            <div className="grid grid-cols-2">
                <div>Sidebar</div>
                <div>Canvas</div>
            </div>
        </Container>
    </>
}