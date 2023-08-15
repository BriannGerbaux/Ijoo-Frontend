import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters: {
        "environment": "",
        "region": "",
        "price": "",
        "query": ""
    }
}

export const filtersSlice = createSlice({
    name: 'itemsFilters',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        }
    }
})

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;