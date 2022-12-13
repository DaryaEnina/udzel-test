import { FC } from "react";
import { IShops } from "../../types/types";
import Card from "./card";
import "./style.scss";

interface ICard {
  shops: IShops;
}

const ShopCard: FC<ICard> = ({ shops }) => {
  return (
    <Card>
      <div className="card_wrapper">
        <p className="card_title">{shops.name}</p>
        <img src={window.location.origin + shops.icon} alt="" />
        <p className="card_text">{shops.description}</p>
        <p className="card_text marg">Вам вернется</p>
        <p className="card_text-cash">{shops.cashBack}</p>
      </div>
    </Card>
  );
};
export default ShopCard;
