import { lazy } from 'react';

export const ArticalPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticalPage')), 1500);
}));