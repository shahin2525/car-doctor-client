import BannerArrow from "../BannerArrow/BannerArrow";
import BannerTextButton from "../BannerTextButton/BannerTextButton";
import PropTypes from "prop-types";

const BannerComponent = ({ img, id, part1, part2 }) => {
  return (
    <div id={id} className="carousel-item relative w-full">
      <img src={img} className="w-full rounded-xl " />

      <BannerTextButton></BannerTextButton>

      <BannerArrow part1={part1} part2={part2}></BannerArrow>
    </div>
  );
};

export default BannerComponent;
BannerComponent.propTypes = {
  part1: PropTypes.string.isRequired,
  part2: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
