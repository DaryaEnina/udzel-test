import { ElProps } from "../../types/types";
import "./style.scss";

const Button = ({ children, className, width, font, onClick }: ElProps) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      style={{ maxWidth: `${width}` }}
    >
      {children}
    </button>
  );
};
export default Button;
