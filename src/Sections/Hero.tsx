import HeroImg from "/assets/Hero/Hero.png";

export default function Hero() {
  return (
    <div
      id="landing-container"
      className="font-inter flex h-full w-full flex-row-reverse flex-wrap justify-between text-black xl:w-[1140px]"
    >
      <div
        id="landing-image"
        className="relative h-1/2 w-full pt-12 md:h-full md:w-[40%]"
      >
        <img
          src={HeroImg}
          alt="GioStare"
          className="z-10 h-full w-full object-contain drop-shadow-lg transition-all duration-1000 hover:scale-110"
        />
      </div>

      <div
        id="landing-text-container"
        className="flex h-1/2 w-full flex-col items-center justify-center p-12 md:h-full md:w-[60%] md:items-start"
      >
        <h1
          id="landing-title"
          className="text-center text-4xl font-semibold text-black md:text-start"
        >
          Welcome to Internship Exercise{" "}
          <p className="font-bold text-primary">Front End</p>
        </h1>

        <p
          id="landing-subtitle"
          className="mt-4 text-center text-secondary md:text-start"
        >
          Website ini dibuat oleh Edgrant sebagai sarana pembelajaran Front End.
          Terdapat sumber belajar dan juga website ini sendiri dapat jadi sumber
          belajar. Kode websiite disediakan pada button berikut.{" "}
        </p>

        <a href="https://github.com/EdgrantHS/intern-exer">
          <button
            id="landing-button"
            className="font-poppins mt-8 w-fit rounded-2xl bg-primary px-6 py-2 text-lg font-bold text-white transition-all duration-300 hover:scale-110"
          >
            Repository
          </button>
        </a>
      </div>
    </div>
  );
}
