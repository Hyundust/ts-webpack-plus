import { fireEvent, render,screen } from "@testing-library/react"
import { SideBar } from "./SideBar";

describe("Sidebar",()=>{
    test("should add render",()=>{
        render(<SideBar/>);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    });

    test("should hide/open",()=>{
        render(<SideBar/>);
        const toggleBut = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBut)
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    });
    
});