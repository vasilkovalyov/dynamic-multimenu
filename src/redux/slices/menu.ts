import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IActiveMenuType, IMenuNavigation } from '../types/menu';
import menu from '../../assets/menu';

export interface IMenuNavigationState {
  menu: IMenuNavigation[];
  activeMenu: IActiveMenuType[];
  loading: boolean;
  error?: string | null;
}

const initialState: IMenuNavigationState = {
  menu: menu,
  activeMenu: [],
  loading: false,
  error: null,
};

const menuNavLCKey = 'menu-navigation';

export const menuNavigationSlice = createSlice({
  name: 'menuNavigationSlice',
  initialState,
  reducers: {
    updateMenu(state, action: PayloadAction<IActiveMenuType[]>) {
      localStorage.setItem(menuNavLCKey, JSON.stringify(action.payload));
      state.activeMenu = action.payload;
    },
    setMenuFromLC(state) {
      const menuFromLC = localStorage.getItem(menuNavLCKey);
      if (menuFromLC) {
        state.activeMenu = JSON.parse(menuFromLC);
      }
    },
  },
});

export const { updateMenu, setMenuFromLC } = menuNavigationSlice.actions;
export default menuNavigationSlice.reducer;
