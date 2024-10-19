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
      className={`h-full w-fit pb-6 md:px-6 ${props.showButton ? "pt-12" : "pt-6"} font-inter flex flex-col items-center justify-center rounded-[1rem] bg-secondary text-white`}
    >
      <div
        id="landing-container"
        className={`flex h-fit w-[360px] flex-wrap justify-center text-center sm:w-[420px] md:w-fit md:text-start ${props.showButton ? "gap-12" : "flex-col gap-12 md:gap-4"} `}
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
          className="font-poppins mt-16 w-fit rounded-2xl bg-primary px-6 py-3 text-lg font-bold text-white transition-all duration-300 hover:scale-110 md:mt-8"
          onClick={handleViewResources}
        >
          View Resources
        </button>
      )}
    </div>
  );
}
