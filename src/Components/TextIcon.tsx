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
      className="flex min-h-[10em] flex-col items-center justify-center md:w-[26rem] md:flex-row md:items-start"
    >
      <div
        id={`${props.id}-icon`}
        className="h-fit w-fit rounded-[1.5rem] bg-[#758d9b] md:m-[1.5rem] md:p-[1.5rem]"
      >
        <img
          src={props.icon}
          alt={props.alt}
          className="h-14 w-14 object-contain"
        />
      </div>

      <div id={`${props.id}-text-box`} className="flex w-[16.5rem] flex-col">
        <h1
          id={`${props.id}-title`}
          className="my-[1.5rem] mb-4 text-2xl font-bold"
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
