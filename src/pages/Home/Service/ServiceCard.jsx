import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="card bg-base-100 w-[380px] shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-between">
          <p>{price}</p>
          <Link to={`checkout/${_id}`}>
            <button>Book now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,

  title: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};
