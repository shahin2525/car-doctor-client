import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import BannerArrow from "../BannerArrow/BannerArrow";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl " />
        <div className="absolute top-0 left-0 flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white w-1/2 space-y-7 pl-12">
            <h1 className="font-bold text-6xl">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-normal text-[18px] ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">DISCOVER MORE</button>
              <button className="btn btn-outline btn-secondary">
                LATEST PROJECT
              </button>
            </div>
          </div>
        </div>

        <BannerArrow part1="#slide4" part2="#slide2"></BannerArrow>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <BannerArrow part1="#slide1" part2="#slide3"></BannerArrow>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <BannerArrow part1="#slide2" part2="#slide4"></BannerArrow>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <BannerArrow part1="#slide3" part2="#slide1"></BannerArrow>
      </div>
    </div>
  );
};

export default Banner;
