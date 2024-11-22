import React from "react";

const Card = ({ image, title, subtitle, link }) => {
  return (
    <a href={link} className="  sm:flex sm:scale-150 sm:mx-5 sm:ml-36   sm:m-9   sm:mt-6 sm:px-3 sm:py-6        md:grid grid-cols-1 md:m-3 md:ml-36   lg:m-4  lg:max-w-sm  lg:rounded-lg  rounded-3xl xl:px-24 xl:grid  xl:grid-cols-1   xl:max-w-xl       ">
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