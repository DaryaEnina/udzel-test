import { ElProps } from "../../types/types";
import "./style.scss";

const Button = ({ children }: ElProps) => {
  return (
    <button type="button" className="outlinedBtn">
      {children}
    </button>
  );
};
export default Button;
