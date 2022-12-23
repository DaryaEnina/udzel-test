import { useState } from "react";
import { FieldValues, useForm, Controller } from "react-hook-form";
import "./form.scss";
import "../button/style.scss";

const RegForm = () => {
  const [visibility, setVisibility] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirmation: "",
      agreement: false,
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="form__wrapper">
      <p className="form__title">Регистрация</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__control">
          <label htmlFor="email">E-mail*</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            placeholder="user_name@mail.by"
            id="email"
            className={errors?.email ? "wrong" : "right"}
          />
          {errors.email?.type === "required" && (
            <p className="errorMsg">Введите адрес электронной почты.</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="errorMsg">Проверьте правильность введения электронной почты.</p>
          )}
        </div>
        <div className="form__control">
          <label>Имя пользователя*</label>
          <input
            type="text"
            {...register("name", {
              required: true,
              validate: {
                checkLength: (value) => value.length >= 2 && value.length <= 25,
                matchPattern: (value) =>
                /(^[a-zA-Zа-яА-Я0-9.,-]+)(\s?[a-zA-Zа-яА-Я0-9.,-]+)+$/.test(
                    value
                  ),
              },
            })}
            placeholder="Имя"
            className={errors?.name ? "wrong" : "right"}
          />
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
              validate: {
                checkLength: (value) => value.length >= 7 && value.length <= 25,
                matchPattern: (value) =>
                  // /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)?[\\\/\|.,'";>:<[\]{\}\(\)+~!?@#$%^&*_-]/.test(
                  /^([a-zA-Z0-9\\/|.,'";>:<[\]{}()+~!?@#$%^&*_-])+$/.test(
                    value
                  ),
              },
            })}
            placeholder="Пароль"
            className={errors?.password ? "wrong" : "right"}
          />
          <p className="password-helper">Не менее 7 символов</p>
          {errors.password?.type === "required" && (
            <p className="errorMsg">Требуется ввести пароль.</p>
          )}
          {errors.password?.type === "checkLength" && (
            <p className="errorMsg">
              Недостаточная длина пароля. Пароль должен содержать не менее 7 символов.
            </p>
          )}
          {errors.password?.type === "matchPattern" && (
            <p className="errorMsg">
              Использование недопустимых знаков.
              {/* Password should contain at least one uppercase letter, lowercase
              letter, digit, and special symbol. */}
              Пароль может содержать только латинские буквы, цифры, специальные символы
            </p>
          )}
        </div>
        <div className="form__control">
          <label>Повторите пароль*</label>
          <div
            className={visibility ? "icon visible" : "icon hidden"}
            onClick={() => setVisibility(!visibility)}
          ></div>
          <input
            type={visibility ? "text" : "password"}
            {...register("passwordConfirmation", {
              required: true,
              validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "Passwords should match!";
                  }
              },
            })}
            placeholder="Пароль"
            className={errors?.passwordConfirmation ? "wrong" : "right"}
          />
          {errors.passwordConfirmation && (
            <p className="errorMsg">Пароли не совпадают</p>
          )}
        </div>
        <Controller
          name="agreement"
          control={control}
          render={({ field }) => {
            return (
              <div className="form__agreement">
                <input
                  {...field}
                  type="checkbox"
                  {...(register("agreement"), { required: true })}
                  id="agreement"
                  className="custom-checkbox"
                  value={"true"}
                />
                <label htmlFor="agreement"></label>
                <div>Я даю согласие на обработку персональных данных</div>
              </div>
            );
          }}
        />
        {/* <div className="form__agreement">
          <input
            type="checkbox"
            {...(register("agreement"), { required: true })}
            id="agreement"
            className="custom-checkbox"
            onChange={() => setChecked(!checked)}
            checked={checked}
            value={"true"}
          />
          <label htmlFor="agreement"></label>
          <div>Я даю согласие на обработку персональных данных</div>
        </div> */}
        <div className="form__control">
          <button type="submit" className="filledBtn">
            Зарегистрироваться
          </button>
        </div>
      </form>
      <div className="bottom-text">
        Уже есть аккаунт?
        {/* <span>Войти</span> */}
        <button>Войти</button>
      </div>
    </div>
  );
};

export default RegForm;
