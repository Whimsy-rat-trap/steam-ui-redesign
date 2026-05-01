import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
    activeMenu: string | null;
    theme: 'dark' | 'light';
}

const initialState: UiState = {
    activeMenu: 'store',
    theme: 'dark',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setActiveMenu: (state, action: PayloadAction<string>) => {
            state.activeMenu = action.payload;
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
    },
});

export const { setActiveMenu, toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;