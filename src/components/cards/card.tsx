import { ElProps } from "../../types/types";
import "./style.scss";

const Card = ({ children }: ElProps) => {
  return <div className="card">{children}</div>;
};
export default Card;
