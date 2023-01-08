import React from "react";
import Button from "../../components/button/button";
import Table from "../../components/table/table";
import "../buy/style.scss";
import "./style.scss";

const Person = () => {
  return (
    <main className="buy_page-wrapper">
      <div className="person_page-container">
        <div className="person_page-personal_info">
          <div className="personal_info-greeting">
            <p>
              Привет,<span>&nbsp;</span>
            </p>
            <h2>Евгений!</h2>
          </div>
          <div className="personal_info-form">
            <div className="form__control">
              <label>Имя пользователя</label>
              <input type="text" placeholder="Евгений" className="" />
            </div>
            <div className="form__control">
              <label>E-mail</label>
              <input type="text" placeholder="sergey@gmail.com" className="" />
            </div>
            <div className="form__control">
              <label>Дата рождения</label>
              <input type="text" placeholder="дд/мм/гггг" className="" />
            </div>
          </div>
          <div className="personal_info-buttons">
            <Button>
              <p className="gradientText">Редактировать</p>
            </Button>
            <p className="personal_info-buttons-change">Сменить пароль</p>
          </div>
        </div>
        <div className="person_page-balance_info">
          <div className="balance_text">Баллов: 36</div>
          <div className="balance_table">
            <Table />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Person;
