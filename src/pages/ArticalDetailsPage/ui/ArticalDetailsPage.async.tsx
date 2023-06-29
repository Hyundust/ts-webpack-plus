import { lazy } from 'react';

export const ArticalDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticalDetailsPage')), 1500);
}));