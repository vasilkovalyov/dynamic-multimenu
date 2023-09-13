import { useEffect } from 'react';
import { MenuNavigation } from 'src/components';
import { setMenuFromLC } from 'src/redux/slices';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';

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
