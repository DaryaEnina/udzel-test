import { ReactNode } from "react";

export interface IShops {
  id: string;
  name: string;
  icon: string;
  description: string;
  cashBack: string;
}
export type ElProps = {
  // children?: JSX.Element;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  width?: string;
  font?: string;
};

export interface IFunds {
  id: string;
  name: string;
  icon: string;
  description: string;
}
