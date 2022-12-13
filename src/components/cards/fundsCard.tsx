import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IFunds } from "../../types/types";
import Button from "../button/button";
import Card from "./card";
import "./style.scss";

interface ICardF {
  funds: IFunds;
}

const FundsCard: FC<ICardF> = ({ funds }) => {
  return (
    <Card>
      <div className="card_wrapper">
        <p className="card_title">{funds.name}</p>
        <img className="card_image funds_image" src={funds.icon} alt="" />
        <p className="card_text funds_text">{funds.description}</p>
        <Button>
          <p className="gradientText">Перечислить баллы</p>
        </Button>
        <NavLink className={"funds_link"} to={"#"}>
          Перейти на сайт
        </NavLink>
      </div>
    </Card>
  );
};
export default FundsCard;
