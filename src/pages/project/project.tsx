import girlImg from "../../assets/images/girl.png";
import bag from "../../assets/images/bag.png";
import coin from "../../assets/images/coin.png";
import hands from "../../assets/images/hands.png";
import Button from "../../components/button/button";
import "./style.scss";

const Project = () => {
  return (
    <main className="project_page-wrapper">
      <div className="project_page-section">
        <div className="project_page-section-text">
          <p className="project_page-section-text-text">
            Покупайте товары в любимых магазинах, делайте заказы в привычных
            сервисах и получайте кешбек баллами, а в конце месяца распределите
            их на помощь нуждающимся
          </p>
          <Button>
            <p className="gradientText project_page-btn">К покупкам</p>
          </Button>
        </div>
        <div className="project_page-section-image">
          <img src={girlImg} alt="girl" />
        </div>
      </div>
      <h2>Как работает благотворительный кешбэк?</h2>
      <div className="project_page-images">
        <img src={bag} alt="bag" />
        <img src={coin} alt="coin" />
        <img src={hands} alt="hands" />
      </div>
    </main>
  );
};

export default Project;
