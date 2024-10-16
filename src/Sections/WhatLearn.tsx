import TextIcon from '../Components/TextIcon';
import Data from '../../resources/WhatLearn/WhatLearn.json'

export default function WhatLearn() {
  return (
    <div
      id="landing-container"
      className="
        w-fit h-full px-6 py-12
        font-inter text-white bg-secondary rounded-[1rem]
        flex flex-wrap justify-center
      "
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
  );
}