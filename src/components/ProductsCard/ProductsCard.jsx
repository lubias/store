import { Link } from "react-router-dom";
import "./index.scss";

const ProductsCard = ({ data }) => {
  
  return (
    <div className="home__card">
      <img src={data.imgPath} alt="model" />
      <div className="home__card-description">
        <p>{data.title}</p>
        <button>
          <Link to={`/products/${data.id}`}>Comprar Look</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;