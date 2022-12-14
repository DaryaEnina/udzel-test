export interface IShops {
  id: string;
  name: string;
  icon: string;
  description: string;
  cashBack: string;
}
export type ElProps = {
  children: JSX.Element;
  onClick?: () => void;
};

export interface IFunds {
  id: string;
  name: string;
  icon: string;
  description: string;
}
