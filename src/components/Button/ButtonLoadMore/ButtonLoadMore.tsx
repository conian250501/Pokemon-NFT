import axios from "axios";
import "./ButtonLoadMore.scss";

interface Props {
  onClick: () => void;
}

const ButtonLoadMore: React.FC<Props> = (props) => {
  const { onClick } = props;
  return (
    <div>
      <button className="poke__load" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default ButtonLoadMore;
