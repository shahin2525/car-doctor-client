import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-[#FF3811] font-bold text-[20px]">Service</h1>
        <h1 className="font-bold text-[45px]">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or random ised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
