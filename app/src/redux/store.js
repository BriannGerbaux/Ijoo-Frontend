import { configureStore } from "@reduxjs/toolkit";
import filtersSliceReducer from './slices/filtersSlice';
import travelsReducer from './slices/travelsSlice';

export const store = configureStore({
    reducer: {
        itemsFilters: filtersSliceReducer,
        travels: travelsReducer,
    },
});