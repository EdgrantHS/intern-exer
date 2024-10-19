import { useEffect } from "react";
import TextIcon from "../Components/TextIcon";
import Data from "../assets/WhatLearn.json";
import { useNavigate } from "react-router";

export default function WhatLearn(props: { showButton?: boolean }) {
  // Menggunakan useNavigate untuk memindah halaman menggunakan
  const navigate = useNavigate();

  // Mengoutputkan nilai props.showButton
  useEffect(() => {
    console.log(props.showButton);
  }, []);

  // function untuk memindah ke page resource menggunakan react-router-dom
  function handleViewResources() {
    navigate("/resource");
  }

  return (
    <div
      id="landing-container"
      className={`
        w-fit h-full md:px-6 pb-6 ${props.showButton ? "pt-12" : "pt-6"}
        font-inter text-white bg-secondary rounded-[1rem]
        flex flex-col justify-center items-center
      `}
    >
      <div
        id="landing-container"
        className={`
        sm:w-[420px] w-[360px] md:w-fit h-fit justify-center text-center md:text-start
        flex flex-wrap ${props.showButton ? "gap-12" : "gap-12 md:gap-4 flex-col"}
      `}
      >
        {Data.map((item) => (
          <TextIcon
            key={item.id}
            id={item.id}
            icon={item.icon}
            alt={item.alt}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
      {props.showButton && (
        <button
          id="landing-button"
          className="
                  bg-primary
                  text-white
                  font-bold text-lg
                  px-6 py-3 rounded-2xl w-fit mt-16 md:mt-8
                  hover:scale-110 duration-300 transition-all
                  font-poppins
                "
          onClick={handleViewResources}
        >
          View Resources
        </button>
      )}
    </div>
  );
}
