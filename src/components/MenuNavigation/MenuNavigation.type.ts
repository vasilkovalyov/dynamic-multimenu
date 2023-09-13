import { IActiveMenuType, IMenuNavigation } from 'src/redux/types/menu';

export type MenuNavigationType = {
  menuItems: IMenuNavigation[];
};

export interface MenuNavigationItemType extends IMenuNavigation {
  level: number;
  activeMenu: IActiveMenuType[];
  onClickToggler: (value: IActiveMenuType[]) => void;
  onClickLink: (value: IActiveMenuType[]) => void;
}
