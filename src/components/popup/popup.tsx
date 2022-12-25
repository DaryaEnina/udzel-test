import { FC } from "react";
import "./index.scss";

const Popup: FC<{
  active: boolean;
  children: JSX.Element;
  handleBtnClick: () => void;
}> = ({ active, children, handleBtnClick }) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div className={active ? "modal__content active" : "modal__content"}>
        <div
          className={
            active ? "modal__content-field active" : "modal__content-field"
          }
        >
          <button
            type="button"
            id="closeBtn"
            className={active ? "modal__closeBtn active" : "modal__closeBtn"}
            onClick={handleBtnClick}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="MyGradient">
                  <stop offset="0%" stopColor="#ff4f8d" />
                  <stop offset="100%" stopColor="#f98712" />
                </linearGradient>
              </defs>
              <path
                d="M10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6Z"
                fill="#505455"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
