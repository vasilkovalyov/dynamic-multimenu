import { useEffect, useState } from 'react';
import cn from 'classnames';

import { MenuNavigationType } from './MenuNavigation.type';
import { IActiveMenuType } from '../../redux/types/menu';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateMenu } from '../../redux/slices';
import MenuNavigationItem from './MenuNavigationItem';

export default function MenuNavigation({ menuItems }: MenuNavigationType) {
  const dispatch = useAppDispatch();
  const activeMenuFromStore = useAppSelector(
    (store) => store.menuNavigationSlice.activeMenu
  );
  const [activeMenuNav, setActiveMenuNav] =
    useState<IActiveMenuType[]>(activeMenuFromStore);

  useEffect(() => {
    setActiveMenuNav(activeMenuFromStore);
  }, [activeMenuFromStore]);

  const handleTogglerClick = (menu: IActiveMenuType[]) => {
    setActiveMenuNav(menu);
  };

  const handleLinkClick = (menu: IActiveMenuType[]) => {
    dispatch(updateMenu(menu));
    setActiveMenuNav(menu);
  };

  return (
    <div className="menu-navigation">
      <p className="menu-navigation__heading">Menu</p>
      {menuItems.length ? (
        <ul
          className={cn(
            'menu-navigation__menu',
            'menu-navigation__menu--level-0'
          )}
        >
          {menuItems.map((item) => (
            <MenuNavigationItem
              key={`menu-${item.name}`}
              {...item}
              level={0}
              activeMenu={activeMenuNav}
              onClickToggler={handleTogglerClick}
              onClickLink={handleLinkClick}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
