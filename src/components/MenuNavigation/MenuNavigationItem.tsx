import cn from 'classnames';

import { MenuNavigationItemType } from './MenuNavigation.type';
import { getFormatString, getCalculateMenu } from './MenuNavigation.utils';

export default function MenuNavigationItem({
  activeMenu,
  onClickToggler,
  onClickLink,
  ...props
}: MenuNavigationItemType) {
  const { target, icon, name, subs, level } = props;

  const getLinkContent = () => {
    return (
      <>
        {icon ? (
          <span
            className={`menu-navigation__link-pre-icon icon-${icon}`}
          ></span>
        ) : null}
        <span className="menu-navigation__link-name">
          {getFormatString(name)}
        </span>
        {subs.length ? (
          <span className="menu-navigation__link-post-icon icon-arrow-down"></span>
        ) : (
          <span className="menu-navigation__link-post-icon icon-chain"></span>
        )}
      </>
    );
  };

  const isActive = () => {
    if (!activeMenu.length || !activeMenu[level]) return false;
    return activeMenu[level].name === name;
  };

  const cnForMenuLink = cn('menu-navigation__link', {
    'menu-navigation__link--active': isActive(),
  });

  function handleClick() {
    onClickToggler(
      getCalculateMenu(activeMenu, {
        name,
        level,
      })
    );
  }

  function handleClickLink(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    onClickLink(
      getCalculateMenu(activeMenu, {
        name,
        level,
      })
    );
  }

  return (
    <li
      className={cn(
        'menu-navigation__menu-item',
        `menu-navigation__menu-item--level-${level}`,
        { 'menu-navigation--has-children': subs.length }
      )}
    >
      {subs.length ? (
        <button className={cnForMenuLink} onClick={handleClick}>
          {getLinkContent()}
        </button>
      ) : (
        <a href={target} className={cnForMenuLink} onClick={handleClickLink}>
          {getLinkContent()}
        </a>
      )}
      {subs.length ? (
        <ul
          className={cn(
            'menu-navigation__menu',
            `menu-navigation__menu-level-${level + 1}`,
            { 'menu-navigation__menu--close': !isActive() },
            {
              'menu-navigation__menu--open': isActive(),
            }
          )}
        >
          {subs.map((subItem) => (
            <MenuNavigationItem
              key={subItem.name}
              {...subItem}
              activeMenu={activeMenu}
              onClickToggler={onClickToggler}
              onClickLink={onClickLink}
              level={level + 1}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}
