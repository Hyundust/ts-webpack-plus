import { createSelector } from "@reduxjs/toolkit"; // Importing the createSelector function from Redux Toolkit
import { StateScheme } from "app/providers/storeProvider"; // Importing the StateScheme type from the store provider

// Selecting the scroll value from the state
export const getScrollSaver = (state: StateScheme) => state?.scrollSaver.scroll;

// Creating a memoized selector to get the scroll value for a specific path
export const getScrollSaverPath = createSelector(
  getScrollSaver, // Input selectors - selecting the scroll value
  (state: StateScheme, path: string) => path, // Additional arguments - selecting the path
  (scroll, path) => scroll[path] || 0 // Combiner function - returning the scroll value for the specified path or 0 if not found
);
