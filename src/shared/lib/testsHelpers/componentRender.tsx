import {ReactNode} from "react";
import {render}  from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from "../../config/i18n/i18nTests"
import { StateScheme, StoreProvider } from "app/providers/storeProvider";


export interface ComponentRenderProps{
    route?:string,
    initialState?:DeepPartial<StateScheme>
}

export function ComponentRender(Component:ReactNode,options:ComponentRenderProps = {}){

    const {
            route="/",
            initialState
    } = options
    render(
        <StoreProvider initialState={initialState as StateScheme}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>
                    {Component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}