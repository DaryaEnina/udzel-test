import { ElProps } from "../../types/types";
import "./style.scss";

const Button = ({ children, onClick }: ElProps) => {
  return (
    <button type="button" className="outlinedBtn" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
