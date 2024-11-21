import React from "react";

const Card = ({ image, title, subtitle, link }) => {
  return (
    <a href={link} className=" md:grid grid-cols-1 m-3 md:ml-36   lg:m-4 lg:block lg:max-w-sm  lg:rounded-lg     xl:max-w-xl  xl:m-4  xl:overflow-hidden xl:rounded-xl  ">
      <div className="relative">
        <img className=" " src={image} alt={title} />
        <div className="absolute left-0 top-0 opacity-0 hover:opacity-100 w-full h-full bg-black/50 grid place-items-center  " >
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          <p className="mb-4 text-sm font-medium">{subtitle}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;