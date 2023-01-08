import { FC, useState, useEffect } from "react";

import "./style.scss";
import heroImg from "../../assets/images/heroImg.png";
import bagImg from "../../assets/images/bag.png";
import coinImg from "../../assets/images/coin.png";
import handsImg from "../../assets/images/hands.png";
import portraits from "../../assets/images/portraits.png";
import heart from "../../assets/images/Heart.png";
import ShopCard from "../../components/cards/shopCard";
import { shops } from "../../data/shops";
import { IShops } from "../../types/types";
import FundsCard from "../../components/cards/fundsCard";
import { funds } from "../../data/funds";
import { IFunds } from "../../types/types";
import { useStateContext } from "../../context/StateContext";
import Button from "../../components/button/button";

const Home: FC = () => {
  const [items, setItems] = useState<IShops[]>([]);
  const [fundsItems, setFundsItems] = useState<IFunds[]>([]);
  const { activeRegistration, setActiveRegistration } = useStateContext();

  const firstShops = shops.slice(0, 3);
  const firstFunds = funds.slice(0, 3);

  useEffect(() => {
    setItems(firstShops);
    setFundsItems(firstFunds);
  }, []);

  return (
    <main className="home_page-wrapper">
      <section className="hero_section">
        <div className="hero_section-content">
          <p>
            Тому, кто помогает другим, тоже нужна забота. Разрешите нам
            позаботиться о вас, чтобы помогать было проще и удобнее.{" "}
          </p>
          <Button
            className="primary big"
            width="311px"
            onClick={() => setActiveRegistration(true)}
          >
            <p className="buttonText">Зарегистрироваться</p>
          </Button>
          {/* <button
            type="button"
            className="filledBtn"
            onClick={() => setActiveRegistration(true)}
          >
            Зарегистрироваться
          </button> */}
        </div>
        <img src={heroImg} alt="hero" />
      </section>
      <section className="description_section">
        <h2>Как работает благотворительный кэшбэк?</h2>
        <div className="description-wrapper">
          <div className="description-item">
            <img src={bagImg} alt="bag" />
            <div className="description-item_text">
              <p>Переходите на сайты магазинов, </p>
              <p>кафе и других партнёров через наш каталог</p>
            </div>
          </div>
          <div className="description-item">
            <img src={coinImg} alt="bag" />
            <div className="description-item_text">
              Делайте привычные покупки и заказы и получайте кешбэк-баллы
            </div>
          </div>
          <div className="description-item">
            <img src={handsImg} alt="bag" />
            <div className="description-item_text">
              Распределяйте баллы кешбэка между выбранными фондами и
              организациями каждый месяц
            </div>
          </div>
        </div>
      </section>
      <section className="stores_section">
        <h2>Где и что купить?</h2>
        <div className="cards">
          {items.map((item) => (
            <ShopCard shops={{ ...item }} key={item.id} />
          ))}
          <div className="card empty">Все партнеры</div>
        </div>
      </section>
      <section className="funds_section">
        <h2>Кому помочь?</h2>
        <div className="cards">
          {fundsItems.map((item) => (
            <FundsCard funds={{ ...item }} key={item.id} />
          ))}
          <div className="card empty">Все организации</div>
        </div>
      </section>
      <section className="about_section">
        <div className="about-description">
          <h2>О проекте</h2>
          <div>
            <p className="gradientText">
              Udzel в переводе с белорусского означает “участие”.
            </p>
            <p>Как принять Udzel в помощи?</p>
            <p className="margin-top">
              Продолжайте совершать привычные покупки в магазинах-партнёрах или
              радуйте себя и близких приятными подарками. А мы позаботимся о
              том, чтобы кешбэк от покупок возвращался в баллах. И вы сами
              разделите их среди тех, кому помогаете. Как дольки одной
              мандаринки.
            </p>
            <p>
              Вы всегда можете увидеть результаты своей помощи в личном
              кабинете, где бы вы ни были. А мы будем рядом. Если у вас появятся
              вопросы во время использования платформы,{" "}
              <span className="gradientText">НАПИШИТЕ НАМ.</span>
            </p>
            <p className="margin-top">
              Мы гордимся вами и будем всегда говорить об этом.
            </p>
            <img className="heart-pic" src={heart} alt="heart" />
          </div>
        </div>
        <img className="portraits" src={portraits} alt="portraits" />
      </section>
    </main>
  );
};

export default Home;
