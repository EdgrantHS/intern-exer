export default function TeamBox(props: {
  alt: string;
  title: string;
  subtitle: string;
  background: string;
  link: string;
}) {
  return (
    <div
      id="team-box"
      className="group flex h-[16rem] min-w-[18rem] cursor-pointer flex-col items-center justify-center rounded-[3rem] border-2 border-primary bg-white pb-2 text-primary transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white md:h-80 md:min-w-[24rem] md:rounded-[3rem] md:border-4 md:pb-8"
      onClick={() => window.open(props.link, "_self")}
    >
      <div className="group flex flex-col items-center justify-center transition-all duration-300 group-hover:justify-between">
        <img
          src={props.background}
          alt={"background" + props.alt}
          className="h-0 w-full object-contain opacity-0 transition-all duration-300 ease-in-out group-hover:mb-2 group-hover:h-28 group-hover:opacity-100"
        />
        <h3
          id="team-title"
          className="mx-4 mb-4 text-center text-xl font-bold text-primary drop-shadow transition-all duration-200 group-hover:text-white md:text-3xl"
        >
          {props.title}
        </h3>
      </div>
      <p
        id="team-subtitle"
        className="mx-6 text-justify text-xs md:text-[1rem]"
      >
        {props.subtitle}
      </p>
    </div>
  );
}
