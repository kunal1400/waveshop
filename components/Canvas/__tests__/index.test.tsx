import { render, screen } from "@testing-library/react";
import AudioCanvas from "../index";

describe("==> Test Cases for AudioCanvas", () => {
    it("Audio canvas component should render on load", () => {
        render(<AudioCanvas 
            imgSrc="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" 
            alt="sample image" 
            width={320} 
            height={320} 
        />);

        const canvasDivWrapper = screen.getAllByRole("generic");
        expect(canvasDivWrapper.length).toBeGreaterThan(1);
    })
})