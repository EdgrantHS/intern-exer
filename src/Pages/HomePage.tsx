import Hero from "../Sections/Hero";
import WhatLearn from "../Sections/WhatLearn";

export default function HomePage() {
  return (
    <main className="min-h-screen w-screen flex flex-col items-center ">
      <section className="w-screen bg-tertiary flex justify-center items-center py-[5rem]">
        <Hero />
      </section>

      <section
        className="w-screen bg-gradient-to-b 
        from-tertiary to-white from-50% to-50%
        flex justify-center items-center"
      >
        <WhatLearn />
      </section>
      <section className="w-screen bg-white flex flex-col justify-center items-center">
        Hello world
        <iframe
          src="https://drive.google.com/file/d/1_R33mpsC7nYdcWGOvpiMJotUeBP73CfS/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        <iframe
          src="https://drive.google.com/file/d/15C4vHnVvs6_Rsm43B1_JhuH7n7ui6tH2/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        <iframe
          src="https://drive.google.com/file/d/1hR6fzBtiXuE8GNOP6DFG5S49vbUPs3Qu/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        <iframe
          src="https://drive.google.com/file/d/1xkD4oj5lBV_aMxGSDMCLsILqvWya83Zc/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </section>
    </main>
  );
}
