import { FC,ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import { reduxStoreWithManager } from "app/providers/storeProvider";
import { useDispatch } from "react-redux";
import { StateSchemeKey } from "app/providers/storeProvider/config/configScheme";
import { Reducer } from "@reduxjs/toolkit";

export interface ModuleLoadProps {
    name: StateSchemeKey;
    reducer: Reducer;
    children: ReactNode;
    removeAfterUnMount?:boolean
}

export const ModuleLoad: FC<ModuleLoadProps> = (props) => {
    const { children,
            name, 
            reducer,
            removeAfterUnMount = true
            } = props;

    const store = useStore() as reduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@INIT ${reducer}` });

        if(removeAfterUnMount){
        return () => {
            store.reducerManager.remove(name);
            dispatch({ type: `@DESTROY ${reducer}` });
        };
    }
    }, []);

    return (
        <>
            {children}
        </>
    );
};

