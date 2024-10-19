export default function TextIcon(props: {
  id: string;
  icon: string;
  alt: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      id={`${props.id}-container`}
      className="flex flex-col md:flex-row justify-center items-center md:items-start
            md:w-[26rem] min-h-[10em]"
    >
      <div
        id={`${props.id}-icon`}
        className="bg-[#758d9b] md:p-[1.5rem] md:m-[1.5rem] rounded-[1.5rem] h-fit w-fit"
      >
        <img
          src={props.icon}
          alt={props.alt}
          className="object-contain w-14 h-14"
        />
      </div>

      <div id={`${props.id}-text-box`} className="flex flex-col w-[16.5rem]">
        <h1
          id={`${props.id}-title`}
          className="text-2xl font-bold mb-4 my-[1.5rem]"
        >
          {props.title}
        </h1>
        <p id={`${props.id}-subtitle`} className="text-tertiary">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}
