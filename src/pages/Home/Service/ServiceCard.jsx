import PropTypes from "prop-types";
const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card bg-base-100 w-[380px] shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
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
