import { useNavigate } from "react-router";
import WhatLearn from "../Sections/WhatLearn";
import Back from "/assets/ResourcePage/Back.webp";

export default function ResourcePage() {
  // Menggunakan useNavigate untuk memindah halaman menggunakan
  const navigate = useNavigate();

  // function untuk memindah ke page home menggunakan react-router-dom
  function handleBack() {
    navigate("/");
  }

  return (
    <main
      className="min-h-screen w-screen flex flex-col items-center
     bg-gradient-to-b from-tertiary to-white"
    >
      <h1 className="text-4xl font-bold h-fit w-fit py-4 px-8 text-white bg-primary rounded-full drop-shadow text-center my-8 mb-16">
        Our Front End Resources
      </h1>

      <div id="floating-back-button" className="fixed top-4 right-4 z-10">
        <button
          className="w-fit h-fit flex items-center justify-center bg-white border-4 border-primary text-secondary font-bold text-lg px-6 py-2 drop-shadow rounded-2xl mt-8 hover:scale-110 duration-300 transition-all font-poppins"
          onClick={handleBack}
        >
          <img src={Back} alt="Back" className="w-6 h-6 inline-block" />
        </button>
      </div>

      <section className="max-w-[1432px] px-4 w-screen flex lg:flex-row flex-col justify-center gap-24 lg:items-start items-center">
        <div className="mb-16 w-fit flex justify-center items-center drop-shadow">
          <WhatLearn showButton={false} />
        </div>

        <div className="w-fit h-fit md:hidden">
          <iframe
            src="https://drive.google.com/file/d/1xkD4oj5lBV_aMxGSDMCLsILqvWya83Zc/preview"
            width="360"
            height="560"
            allow="autoplay"
          ></iframe>
        </div>

        <div className="w-fit h-fit hidden md:flex">
          <iframe
            src="https://drive.google.com/file/d/1xkD4oj5lBV_aMxGSDMCLsILqvWya83Zc/preview"
            width="640"
            height="560"
            allow="autoplay"
          ></iframe>
        </div>

      </section>
    </main>
  );
}
