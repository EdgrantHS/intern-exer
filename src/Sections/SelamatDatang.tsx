import TeamBox from "../Components/TeamBox";

export default function SelamatDatang() {
  return (
    <div className="bg-white w-screen md:w-[1500px] px-12">
      <h1 className="text-4xl font-bold h-fit w-fit py-4 px-8 text-primary bg-tertiary rounded-full drop-shadow text-center mt-16">
        SELAMAT DATANG DI INTERNSHIP FE EXERCISE 🎊🎊🥳🥳
      </h1>
      <section
        id="team-boxes"
        className="flex gap-8 py-8 overflow-x-auto hover:scale-[101%] transition-all duration-300 ease-in-out overflow-y-visible
        w-full md:w-[1432px] h-[400px] md:h-[500px] mt-4 md:mt-0 no-scrollbar"
      >
        <TeamBox
          alt="Team1"
          title="Azra Nabila Azzahra"
          subtitle="Intern Front End Exercise"
          background="/assets/Stickman.png"
          link="https://github.com"
        />
        <TeamBox
          alt="Team2"
          title="Kharisma Aprilia"
          subtitle="Intern Front End Exercise"
          background="/assets/Stickman.png"
          link="https://github.com"
        />
        <TeamBox
          alt="Team3"
          title="Muhammad Fattah"
          subtitle="Intern Front End Exercise"
          background="/assets/Stickman.png"
          link="https://github.com"
        />
        <TeamBox
          alt="Team4"
          title="Musyaffa Iman Supriadi"
          subtitle="Intern Front End Exercise"
          background="/assets/Stickman.png"
          link="https://github.com"
        />
      </section>
    </div>
  );
}
