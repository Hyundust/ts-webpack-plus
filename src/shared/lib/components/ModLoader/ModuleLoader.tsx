import { FC,ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import { reduxStoreWithManager } from "app/providers/storeProvider";
import { useDispatch } from "react-redux";
import { StateSchemeKey } from "app/providers/storeProvider/config/configScheme";
import { Reducer } from "@reduxjs/toolkit";

export type ReducerList = {
    [name in StateSchemeKey]?:Reducer
}

type ReducerListEntry =[StateSchemeKey,Reducer]


export interface ModuleLoadProps {
    reducers: ReducerList
    children: ReactNode;
    removeAfterUnMount?:boolean
}

export const ModuleLoad: FC<ModuleLoadProps> = (props) => {
    const { children,
            reducers,
            removeAfterUnMount = true
            } = props;

    const store = useStore() as reduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name,reducer]:ReducerListEntry)=>{

            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${reducer}` });
        
        });
        return () => {
            if(removeAfterUnMount){
                Object.entries(reducers).forEach(([name,reducer]:ReducerListEntry)=>{
                
                        store.reducerManager.remove(name);
                        dispatch({ type: `@DESTROY ${reducer}` });
                    })}
                }},[])
        
        
   

    return (
        <>
            {children}
        </>
    );
};

