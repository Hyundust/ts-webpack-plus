import { FC, ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import { reduxStoreWithManager } from "app/providers/storeProvider"; // Importing required dependencies 
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch";
import { StateSchemeKey } from "app/providers/storeProvider/config/configScheme";
import { Reducer } from "@reduxjs/toolkit";
import { StateScheme } from "app/providers/storeProvider/config/configScheme";

export type ReducerList = {
  [name in StateSchemeKey]?: Reducer<NonNullable<StateScheme[name]>>; 
};

export interface ModuleLoadProps {
  reducers: ReducerList;
  children: ReactNode;
  removeAfterUnMount?: boolean;
}

export const ModuleLoad: FC<ModuleLoadProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnMount = true
  } = props; 

  const store = useStore() as reduxStoreWithManager; // Accessing the Redux store
  const dispatch = useAppDispatch(); // Getting the dispatcher function

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers(); // Getting the currently mounted reducers from the store

    Object.entries(reducers).forEach(([name, reducer]) => { // Iterating over the provided reducers
      const mounted = mountedReducers[name as StateSchemeKey]; // Checking if the reducer is already mounted
      
      if (!mounted) { // If the reducer is not mounted
        store.reducerManager.add(name as StateSchemeKey, reducer); // Add the reducer to the store's reducer manager
        dispatch({ type: `@INIT ${reducer}` }); // Dispatch an initialization action for the reducer
      }
    });

    return () => { // Cleanup function executed on unmount
      if (removeAfterUnMount) { // If specified to remove reducers on unmount
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemeKey); // Remove the reducer from the store's reducer manager
          dispatch({ type: `@DESTROY ${reducer}` }); // Dispatch a destroy action for the reducer
        });
      }
    };
  }, []);

  return (
    <>
      {children}
    </>
  );
};
