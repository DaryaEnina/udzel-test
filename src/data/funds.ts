import { IFunds } from "../types/types";
import fund1 from "../assets/images/fund1.png";
import fund2 from "../assets/images/fund2.png";
import fund3 from "../assets/images/fund3.png";

export const funds: IFunds[] = [
  {
    id: "0",
    name: "ДОМ АНГЕЛА",
    icon: fund1,
    description: "Благотворительный фонд помощи детям и взрослым",
  },
  {
    id: "1",
    name: "ПИНА.БЕЛ",
    icon: fund2,
    description: "Помощь бездомным животным",
  },
  {
    id: "2",
    name: "СИРИН",
    icon: fund3,
    description: "Центр помощи диким животным «Сирин»",
  },
];
