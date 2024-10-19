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
    <main className="flex min-h-screen w-screen flex-col items-center bg-gradient-to-b from-tertiary to-white">
      <h1 className="my-8 mb-16 h-fit w-fit rounded-full bg-primary px-8 py-4 text-center text-4xl font-bold text-white drop-shadow">
        Our Front End Resources
      </h1>

      <div id="floating-back-button" className="fixed right-4 top-4 z-10">
        <button
          className="font-poppins mt-8 flex h-fit w-fit items-center justify-center rounded-2xl border-4 border-primary bg-white px-6 py-2 text-lg font-bold text-secondary drop-shadow transition-all duration-300 hover:scale-110"
          onClick={handleBack}
        >
          <img src={Back} alt="Back" className="inline-block h-6 w-6" />
        </button>
      </div>

      <section className="flex w-screen max-w-[1432px] flex-col items-center justify-center gap-24 px-4 lg:flex-row lg:items-start">
        <div className="mb-16 flex w-fit items-center justify-center drop-shadow">
          <WhatLearn showButton={false} />
        </div>

        <div className="h-fit w-fit md:hidden">
          <iframe
            src="https://drive.google.com/file/d/1xkD4oj5lBV_aMxGSDMCLsILqvWya83Zc/preview"
            width="360"
            height="560"
            allow="autoplay"
          ></iframe>
        </div>

        <div className="hidden h-fit w-fit md:flex">
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
