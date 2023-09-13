import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import { setMenuFromLC } from '../../redux/slices';

export default function Header() {
  const dispatch = useAppDispatch();
  const menu = useAppSelector((state) => state.menuNavigationSlice);

  useEffect(() => {
    dispatch(setMenuFromLC());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="header">
      <MenuNavigation menuItems={menu.menu || []} />
    </header>
  );
}
