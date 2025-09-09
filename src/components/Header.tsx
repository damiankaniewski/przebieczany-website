"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else if (scrollPosition === 0) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 ${
        isScrolled ? "bg-green3" : "bg-transparent"
      }  transition-colors duration-300`}
    >
      <div
        className={`md:px-8 py-4 flex justify-between items-center w-full ${
          isMenuOpen ? "bg-green3" : ""
        }`}
      >
        <div
          className="flex items-center w-56 pl-4"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <Link href="#home">
            <img
              src="/logo_dlugie.png"
              alt="Logo"
              className="h-16 w-60 mr-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] object-contain"
            />
          </Link>
        </div>

        <nav
          className="hidden md:flex justify-center space-x-7 lg:space-x-14 md:text-lg lg:text-xl w-dvw items-center"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <Link
            href="#investment"
            className="block text-white hover:text-green1 font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          >
            O INWESTYCJI
          </Link>
          <Link
            href="#profits"
            className="block text-white hover:text-green1 font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          >
            PROFITY
          </Link>
          <Link
            href="#houses"
            className="block text-white hover:text-green1 font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          >
            DOMY
          </Link>
          <Link
            href="#gallery"
            className="block text-white hover:text-green1 font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          >
            GALERIA
          </Link>
        </nav>
        <div
          className="w-1/6 flex justify-end"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <nav
            className={`max-md:hidden md:text-lg lg:text-xl bg-green2 p-3  rounded-2xl w-40 text-center hover:bg-green1 ${
              isScrolled ? "bg-green2" : ""
            }`}
          >
            <Link
              href="#contact"
              className={
                "block text-white w-full font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
              }
            >
              KONTAKT
            </Link>
          </nav>
        </div>

        <button
          className="md:hidden flex items-center text-white pr-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed flex flex-col items-center top-24 pt-4 bg-green3  shadow-md z-30 w-screen h-auto">
          <Link
            href="#investment"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-green2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">O inwestycji</p>
          </Link>
          <Link
            href="#profits"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-green2 break-words max-w-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Profity</p>
          </Link>
          <Link
            href="#houses"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-green2 break-words max-w-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Domy</p>
          </Link>
          <Link
            href="#gallery"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-green2 break-words max-w-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Galeria</p>
          </Link>
          <Link
            href="#contact"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-green2 break-words max-w-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Kontakt</p>
          </Link>
        </div>
      )}
    </header>
  );
}
