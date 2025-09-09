import Link from "next/link";

export default function Home() {
  return (
    <section
      id="home"
      className="flex justify-center items-center w-full h-screen flex-col relative z-20"
    >
      <p
        className="text-3xl md:text-5xl text-white font-bold mb-6 text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        TWÓJ WYMARZONY DOM
      </p>
      <p
        className="text-3xl md:text-5xl text-white font-bold text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
        data-aos="fade-up"
        data-aos-delay="700"
        data-aos-duration="1000"
      >
        W IDEALNEJ LOKALIZACJI.
      </p>
      <div className="flex max-md:flex-col max-md:space-y-5 max-md:w-full max-md:items-center md:space-x-10 mt-8">
        <Link
          className="py-3 w-56 max-md:w-3/5 bg-green4 text-white rounded-2xl hover:bg-green2 hover:text-white transition break-words max-w-full text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          href="#houses"
          data-aos="zoom-in"
          data-aos-delay="900"
          data-aos-duration="1000"
        >
          Zobacz ofertę
        </Link>
        <Link
          className="py-3 w-56 max-md:w-3/5 bg-green4 text-white rounded-2xl hover:bg-green2 hover:text-white transition break-words max-w-full text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          href="#contact"
          data-aos="zoom-in"
          data-aos-delay="1100"
          data-aos-duration="1000"
        >
          Skontaktuj się
        </Link>
      </div>
    </section>
  );
}
