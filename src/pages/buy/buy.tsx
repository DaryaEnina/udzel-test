import React, { useEffect, useState } from "react";
import Card from "../../components/cards/shopCard";
import { shops } from "../../data/shops";
import { IShops } from "../../types/types";
import "./style.scss";

const Buy = () => {
  const [items, setItems] = useState<IShops[]>([]);

  useEffect(() => {
    setItems(shops);
  }, []);

  return (
    <main className="buy_page-wrapper">
      <h2>Где и что купить?</h2>
      <p className="buy_page-text">
        Вы не одиноки в своём желании помогать. Ваши любимые бренды тоже здесь.
        В этом разделе вы можете выбрать магазин и совершить покупку. А мы
        вернём кешбэк в виде баллов. Вы найдёте их в личном кабинете.
      </p>
      <div className="cards">
        {items.map((item) => (
          <Card shops={{ ...item }} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Buy;
