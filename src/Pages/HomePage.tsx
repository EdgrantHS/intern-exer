import Hero from "../Sections/Hero";
import SelamatDatang from "../Sections/SelamatDatang";
import WhatLearn from "../Sections/WhatLearn";

export default function ResourcePage() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center">
      <section className="flex w-screen items-center justify-center bg-tertiary py-[5rem]">
        <Hero />
      </section>

      <section className="flex w-screen items-center justify-center bg-gradient-to-b from-tertiary from-50% to-white to-50%">
        <WhatLearn showButton={true} />
      </section>

      <SelamatDatang />
    </main>
  );
}
