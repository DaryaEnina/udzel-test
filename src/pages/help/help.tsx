import React, { useEffect, useState } from "react";
import FundsCard from "../../components/cards/fundsCard";
import { funds } from "../../data/funds";
import { IFunds } from "../../types/types";
import "../buy/style.scss";

const Help = () => {
  const [items, setItems] = useState<IFunds[]>([]);

  useEffect(() => {
    setItems(funds);
  }, []);
  return (
    <main className="buy_page-wrapper">
      <h2>Кому помочь?</h2>
      <p className="buy_page-text">
        Здесь вы можете перечислить накопленные баллы одной благотворительной
        организации или разделить их среди нескольких фондов. А если еще не
        решили, кому хотите помогать, просто перейдите на сайт организации и
        узнайте больше о тех, кому нужна помощь.
      </p>
      <div className="cards">
        {items.map((item) => (
          <FundsCard funds={{ ...item }} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Help;
