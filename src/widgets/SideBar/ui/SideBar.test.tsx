import { fireEvent, render,screen } from "@testing-library/react"
import { SideBar } from "./SideBar";
import { renderWithTranslation } from "shared/lib/testsHelpers/RenderWithTranslations";
import { ComponentRender } from "shared/lib/testsHelpers/componentRender";

describe("Sidebar",()=>{
    test("should add render",()=>{
        ComponentRender(<SideBar/>);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    });

    test("should hide/open",()=>{
        ComponentRender (<SideBar/>);
        const toggleBut = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBut)
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    });
    
});