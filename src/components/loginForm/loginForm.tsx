import { useState } from "react";
import axios from "axios";
import { FieldValues, useForm } from "react-hook-form";

import { useStateContext } from "../../context/StateContext";
import "../registrationForm/form.scss";
import "../button/style.scss";
import Button from "../button/button";

const LoginForm = () => {
  const [visibility, setVisibility] = useState(false);
  const { setActiveRegistration, setActiveLogin } = useStateContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    axios
      .post("http://localhost:5000/api/users/login", data)
      .then((res) => console.log(res));
  };

  const handleClick = () => {
    setActiveLogin(false);
    setActiveRegistration(true);
  };

  return (
    <div className="form__wrapper">
      <p className="form__title">Вход</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__control">
          <label htmlFor="email">E-mail*</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            placeholder="user_name@mail.by"
            id="email"
            className={errors?.email ? "wrong" : "right"}
          />
          {errors.email?.type === "required" && (
            <p className="errorMsg">Введите адрес электронной почты.</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="errorMsg">
              Проверьте правильность введения электронной почты.
            </p>
          )}
        </div>
        <div className="form__control">
          <label>Пароль*</label>
          <div
            className={visibility ? "icon visible" : "icon hidden"}
            onClick={() => setVisibility(!visibility)}
          ></div>
          <input
            type={visibility ? "text" : "password"}
            {...register("password", {
              required: true,
            })}
            placeholder="Пароль"
            className={errors?.password ? "wrong" : "right"}
          />
          {errors.password?.type === "required" && (
            <p className="errorMsg">Требуется ввести пароль.</p>
          )}
        </div>
        <button className="restore">Восстановить пароль</button>
        <div className="form__control form__button">
          <Button className="primary big">
            <p className="buttonText">Войти</p>
          </Button>
          {/* <button type="submit" className="filledBtn loginBtn">
            Войти
          </button> */}
        </div>
      </form>
      <div className="bottom-text">
        Нет аккаунта?
        {/* <Button className="secondary medium">
          <p className="gradientText">Зарегистрировать</p>
        </Button> */}
        <button onClick={handleClick}>Зарегистрировать</button>
      </div>
    </div>
  );
};

export default LoginForm;
