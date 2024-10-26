import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

import BannerComponent from "../BannerComponent/BannerComponent";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <BannerComponent
        img={img1}
        id="slide1"
        part1="#slide4"
        part2="#slide2"
      ></BannerComponent>
      <BannerComponent
        img={img2}
        id="slide2"
        part1="#slide1"
        part2="#slide3"
      ></BannerComponent>
      <BannerComponent
        img={img3}
        id="slide3"
        part1="#slide2"
        part2="#slide4"
      ></BannerComponent>
      <BannerComponent
        img={img4}
        id="slide4"
        part1="#slide3"
        part2="#slide1"
      ></BannerComponent>
    </div>
  );
};

export default Banner;
