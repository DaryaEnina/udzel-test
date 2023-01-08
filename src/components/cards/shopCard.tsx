import { FC } from "react";
import { IShops } from "../../types/types";
import Button from "../button/button";
import Card from "./card";
import "./style.scss";

interface ICard {
  shops: IShops;
}

const ShopCard: FC<ICard> = ({ shops }) => {
  return (
    <Card>
      <div className="card_wrapper">
        <div className="card_info">
          <p className="card_title">{shops.name}</p>
          <img
            className="card_image"
            src={window.location.origin + shops.icon}
            alt=""
          />
          <p className="card_text">{shops.description}</p>
          <p className="card_text marg">Вам вернется</p>
          <p className="card_text-cash">{shops.cashBack}</p>
        </div>
        <div className="card_button-wrapper">
          <Button className="secondary big">
            <p className="gradientText">К покупкам</p>
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default ShopCard;
