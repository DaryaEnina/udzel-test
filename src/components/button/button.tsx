import { ElProps } from "../../types/types";
import "./style.scss";

const Button = ({ children, className, onClick }: ElProps) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
