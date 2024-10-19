import HeroImg from "/assets/Hero/Hero.png";

export default function Hero() {
  return (
    <div
      id="landing-container"
      className="
            xl:w-[1140px] h-full
              w-full
            font-inter text-black
            flex flex-row-reverse flex-wrap justify-between
          "
    >
      <div
        id="landing-image"
        className="
              md:w-[40%] md:h-full pt-12
                h-1/2 w-full 
              relative
            "
      >
        <img
          src={HeroImg}
          alt="GioStare"
          className="
                w-full h-full object-contain z-10
                drop-shadow-lg
                hover:scale-110 duration-1000 transition-all
              "
        />
      </div>

      <div
        id="landing-text-container"
        className="
              flex flex-col 
              justify-center
              md:w-[60%] md:h-full md:items-start
                h-1/2 w-full items-center
              p-12
            "
      >
        <h1
          id="landing-title"
          className="
                text-4xl font-semibold text-black
                md:text-start
                  text-center
            "
        >
          Welcome to Internship Exercise{" "}
          <p className="text-primary font-bold">Front End</p>
        </h1>

        <p
          id="landing-subtitle"
          className="
                mt-4 text-secondary
                md:text-start
                  text-center
              "
        >
          Website ini dibuat oleh Edgrant sebagai sarana pembelajaran Front End.
          Terdapat sumber belajar dan juga website ini sendiri dapat jadi sumber
          belajar. Kode websiite disediakan pada button berikut.{" "}
        </p>

        <a href="https://github.com/EdgrantHS/intern-exer">
          <button
            id="landing-button"
            className="
                  bg-primary
                  text-white
                  font-bold text-lg
                  px-6 py-2 rounded-2xl w-fit mt-8
                  hover:scale-110 duration-300 transition-all
                  font-poppins
                "
          >
            Repository
          </button>
        </a>
      </div>
    </div>
  );
}
