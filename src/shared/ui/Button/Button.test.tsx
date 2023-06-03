import { render,screen } from "@testing-library/react"
import { Button, ThemeButton } from "./Button"

describe("Button",()=>{
    test("should add button",()=>{
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument()
});
    test("clear class",()=>{
        render(<Button theme = {ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
        screen.debug()
    }); 
});