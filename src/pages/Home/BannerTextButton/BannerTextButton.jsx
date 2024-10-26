const BannerTextButton = () => {
  return (
    <div className="absolute top-0 left-0 flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
      <div className="text-white w-1/2 space-y-7 pl-12">
        <h1 className="font-bold text-6xl">
          Affordable Price For Car Servicing
        </h1>
        <p className="font-normal text-[18px] ">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div>
          <button className="btn btn-primary mr-5">DISCOVER MORE</button>
          <button className="btn btn-outline btn-secondary">
            LATEST PROJECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerTextButton;
