import "./style.scss";

type Props = {
  children: JSX.Element;
};
const Card = ({ children }: Props) => {
  return <div className="card">{children}</div>;
};
export default Card;
