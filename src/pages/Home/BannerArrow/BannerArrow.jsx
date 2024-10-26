import PropTypes from "prop-types";
const BannerArrow = ({ part1, part2 }) => {
  if (!part1 || !part2) {
    console.error("Missing part1 or part2 prop in BannerArrow");
  }
  return (
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href={part1} className="btn btn-circle mr-3 hover:bg-red-600">
        ❮
      </a>
      <a href={part2} className="btn btn-circle hover:bg-red-600">
        ❯
      </a>
    </div>
  );
};

export default BannerArrow;

BannerArrow.propTypes = {
  part1: PropTypes.string.isRequired,
  part2: PropTypes.string.isRequired,
};
