import TeamBox from "../Components/TeamBox";

export default function SelamatDatang() {
  return (
    <div className="w-screen bg-white px-12 md:w-[1500px]">
      <h1 className="mt-16 h-fit w-fit rounded-full bg-tertiary px-8 py-4 text-center text-4xl font-bold text-primary drop-shadow">
        SELAMAT DATANG DI INTERNSHIP FE EXERCISE 🎊🎊🥳🥳
      </h1>
      <section
        id="team-boxes"
        className="no-scrollbar mt-4 flex h-[400px] w-full gap-8 overflow-x-auto overflow-y-visible py-8 transition-all duration-300 ease-in-out hover:scale-[101%] md:mt-0 md:h-[500px] md:w-[1432px]"
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
