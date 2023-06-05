import { fireEvent, render,screen } from "@testing-library/react"
import { SideBar } from "./SideBar";
import {withTranslation} from "react-i18next"
import { renderWithTranslation } from "shared/lib/testsHelpers/RenderWithTranslations";

describe("Sidebar",()=>{
    test("should add render",()=>{
        renderWithTranslation(<SideBar/>);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    });

    test("should hide/open",()=>{
        renderWithTranslation(<SideBar/>);
        const toggleBut = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBut)
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    });
    
});