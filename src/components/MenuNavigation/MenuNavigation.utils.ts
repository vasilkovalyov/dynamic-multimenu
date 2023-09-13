import { IActiveMenuType } from '../../redux/types/menu';

export function getFormatString(str: string): string {
  const strArr = str.split('.');
  const lastWordInStr = strArr[strArr.length - 1].replace(/-/g, ' ');
  const hasNameValueInLast = strArr[strArr.length - 1] === 'name';

  if (strArr.length === 2) {
    if (hasNameValueInLast) return strArr[0].replace(/-/g, ' ');
    return lastWordInStr;
  }

  if (strArr.length === 3) {
    if (hasNameValueInLast) return strArr[1].replace(/-/g, ' ');
    return lastWordInStr;
  }

  return str;
}

export function getNewArrIfItemExist(
  arr: IActiveMenuType[],
  { name, level }: IActiveMenuType
): IActiveMenuType[] {
  const tempArray: IActiveMenuType[] = [...arr];
  for (let i = 0; i <= tempArray.length - 1; i++) {
    const item = tempArray[i];

    if (item.level === level) {
      tempArray.splice(i, 1, {
        name: name,
        level: level,
      });
    } else if (item.level > level) {
      tempArray.splice(i, 1);
    }
  }
  return tempArray;
}

export function removeExistItemInArrAndLast(
  arr: IActiveMenuType[],
  { name, level }: IActiveMenuType
): IActiveMenuType[] {
  let tempArray: IActiveMenuType[] = [...arr];

  for (let i = 0; i <= tempArray.length - 1; i++) {
    const item = tempArray[i];

    if (level === 0) {
      tempArray = [];
      break;
    }

    if (item.name === name) {
      tempArray.splice(i, 1);
    }
    if (item.level >= level) {
      tempArray.splice(i, 1);
    }
  }

  return tempArray;
}

export function getCalculateMenu(
  menuArray: IActiveMenuType[],
  { level, name }: IActiveMenuType
): IActiveMenuType[] {
  let menuArr: IActiveMenuType[] = [...menuArray];

  if (!menuArray.length) {
    menuArr.push({
      name: name,
      level: level,
    });
    return menuArr;
  }

  const existValueInArray = menuArray.find((v) => v.name === name);

  if (existValueInArray) {
    menuArr = removeExistItemInArrAndLast(menuArr, {
      name,
      level,
    });
    return menuArr;
  }
  if (menuArr[level] && menuArr[level].level === level) {
    menuArr = getNewArrIfItemExist(menuArr, {
      name,
      level,
    });
  } else {
    menuArr.push({
      name: name,
      level: level,
    });
  }
  return menuArr;
}
