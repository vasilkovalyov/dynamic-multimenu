export interface IMenuNavigation {
  name: string;
  icon: string;
  target: string;
  subs: IMenuNavigation[];
  title_attribute: string | null;
}

export type IActiveMenuType = {
  name: string;
  level: number;
};
