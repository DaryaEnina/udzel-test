import { FC } from "react";
import "./index.scss";
import closeBtn from "../../assets/images/closeBtn.png";

const Popup: FC<{
  active: boolean;
  children: JSX.Element;
  handleBtnClick: () => void;
}> = ({ active, children, handleBtnClick }) => {
  return (
    <div className={active ? ["modal", "active"].join(" ") : "modal"}>
      <div
        className={
          active ? ["modal__content", "active"].join(" ") : "modal__content"
        }
      >
        <button
          type="button"
          className={
            active ? ["modal__closeBtn", "active"].join(" ") : "modal__closeBtn"
          }
          onClick={handleBtnClick}
        >
          <img src={closeBtn} alt="closeBtn" />
        </button>
        <div
          className={
            active
              ? ["modal__content-field", "active"].join(" ")
              : "modal__content-field"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
