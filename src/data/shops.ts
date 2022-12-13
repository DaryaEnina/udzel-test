import { IShops } from "../types/types";
import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";

export const shops: IShops[] = [
  {
    id: "0",
    name: "EGO-ARTE",
    icon: img1,
    description: "Интернет-магазин ювелирных украшений ",
    cashBack: "1,5 - 3%",
  },
  {
    id: "1",
    name: "LEMODA",
    icon: img2,
    description: "Интернет-магазин одежды",
    cashBack: "1,5 - 3%",
  },
  {
    id: "2",
    name: "FABRIK",
    icon: img3,
    description: "Интернет-магазин одежды ",
    cashBack: "1,5 - 3%",
  },
  {
    id: "3",
    name: "PIZZA",
    icon: img4,
    description: "Пицца на вынос ",
    cashBack: "1,5 - 3%",
  },
];
