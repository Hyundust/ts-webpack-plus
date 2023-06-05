import {ReactNode} from "react";
import {render}  from "@testing-library/react"
import { I18nextProvider } from 'react-i18next';
import i18n from "../../config/i18n/i18nTests"
 
export function renderWithTranslation(Component:ReactNode){



    render(
        <I18nextProvider i18n={i18n}>
                {Component}
        </I18nextProvider>
    )




}