import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative h-[557px]">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl h-[260px] absolute right-5 top-[30%] border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 h-[557px]">
          <h1 className="text-xl font-bold text-[#FF3811]">About Us</h1>
          <p className="py-6 text-[45px] font-bold">
            We are qualified & of experience in this field
          </p>
          <p className="py-6 text-[16px] font-normal">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. the majority have suffered alteration in some form, by
            injected humour, or randomised words which do not look even slightly
            believable.
          </p>

          <button className="btn btn-primary bg-[#FF3811]">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
