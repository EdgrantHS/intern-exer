import Hero from "../Sections/Hero";
import SelamatDatang from "../Sections/SelamatDatang";
import WhatLearn from "../Sections/WhatLearn";

export default function ResourcePage() {
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
        <WhatLearn showButton={true} />
      </section>

      <SelamatDatang />

    </main>
  );
}
