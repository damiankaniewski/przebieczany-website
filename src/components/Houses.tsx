"use client";
import Image from "next/image";
import houseCoordinates from "@/config/houseCoordinates";
import { FaDownload } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

export default function Houses() {
  const listRef = useRef<HTMLDivElement>(null);
  const [houseOffers, setHouseOffers] = useState<any[]>([]);

  const getStatusText = (status: number) => {
    switch (status) {
      case 0:
        return "Sprzedany";
      case 1:
        return "Dostępny";
      case 2:
        return "Zarezerwowany";
      default:
        return "Nieznany";
    }
  };

  const formatPrice = (price: number | string): string => {
    const priceStr = typeof price === "number" ? price.toString() : price;
    const cleanPrice = priceStr.replace(/\s/g, "");
    return cleanPrice.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  useEffect(() => {
    const fetchHouseOffers = async () => {
      try {
        const response = await fetch(
          "https://o28scgzs0g.execute-api.eu-central-1.amazonaws.com/prd/get-items"
        );
        const data = await response.json();
        const sortedData = data.body.sort((a: any, b: any) =>
          a.Id.localeCompare(b.Id)
        );

        const combinedData = sortedData.map((house: any) => {
          const coords = houseCoordinates.find(
            (coord) => coord.numer === house.Id
          );
          return {
            ...house,
            x: coords?.x || 0,
            y: coords?.y || 0,
            cena: house.cena ? formatPrice(house.cena) : house.cena,
          };
        });
        console.log(combinedData);
        setHouseOffers(combinedData);
      } catch (error) {
        alert("Błąd podczas pobierania danych");
        console.log("Błąd podczas pobierania danych: ", error);
      }
    };
    fetchHouseOffers();
  }, []);

  const isMobile = () => window.innerWidth <= 768;

  const scrollToOffer = (id: string) => {
    if (isMobile()) {
      scrollToOfferMobile(id);
    } else {
      scrollToOfferDesktop(id);
    }
  };

  const scrollToOfferDesktop = (id: string) => {
    const container = listRef.current;
    const targetElement = document.getElementById(id);

    if (container && targetElement) {
      const containerTop = container.getBoundingClientRect().top;
      const targetTop = targetElement.getBoundingClientRect().top;

      const offset = targetTop - containerTop + container.scrollTop;
      container.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const scrollToOfferMobile = (id: string) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <section
      id="houses"
      className="w-full flex flex-col items-center justify-between bg-grey relative scroll-mt-20"
    >
      <div className="w-full text-center pt-10 lg:py-10">
        <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 font-bold break-words max-w-full">
          DOMY
        </p>
      </div>

      <div className="w-full px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start gap-10 md:h-auto">
        <div className="w-full md:w-[55%] flex justify-center md:justify-start items-start relative ">
          <div className="w-full relative">
            <Image
              src="/renderZGory2.jpg"
              alt="Estate"
              layout="responsive"
              objectFit="cover"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
              data-aos="fade-down"
            />
            {houseOffers.map((house, index) => (
              <button
                key={index}
                onClick={() => scrollToOffer(`house-${house.numer}`)}
                className={`absolute flex justify-center items-center text-white ${
                  house.status === 0
                    ? "bg-red-500"
                    : house.status === 1
                    ? "bg-green2"
                    : "bg-yellow-500"
                } rounded-full w-5 h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-sm lg:text-base font-bold transition-all duration-200`}
                style={{
                  top: `${house.y}%`,
                  left: `${house.x}%`,
                  transform: "translate(-50%, -50%)",
                }}
                data-aos="fade-down"
                data-aos-delay={`${200 + index * 100}`}
              >
                {house.numer}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={listRef}
          className="w-full md:w-[45%] flex justify-center items-start overflow-y-auto md:max-h-[70vh]"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
            {houseOffers.map((house, index) => (
              <div
                key={index}
                id={`house-${house.numer}`}
                className="flex flex-col bg-white p-4 rounded-lg shadow-md space-y-4"
              >
                <div>
                  <p className="text-green4 text-xl font-semibold">
                    Dom nr {house.numer}
                  </p>
                  <p className="text-gray-600">
                    Status:{" "}
                    <span
                      className={`${
                        house.status === 0
                          ? "text-red-500"
                          : house.status === 1
                          ? "text-green-500"
                          : "text-yellow-500"
                      } font-semibold`}
                    >
                      {getStatusText(house.status)}
                    </span>
                  </p>
                  <p className="text-gray-600">Metraż: {house.metraz} m²</p>
                  <p className="text-gray-600">Pokoje: {house.pokoje}</p>
                  <p className="text-gray-600">Działka: {house.dzialka} ara</p>
                  {house.status !== 0 && (
                    <p className="text-gray-600 font-bold">
                      Cena: {house.cena} zł
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  <a
                    className="w-full bg-green2 p-4 rounded-xl text-white flex justify-center items-center gap-2 hover:bg-green3 transition-all duration-200"
                    href={house.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDownload className="w-5 h-5" />
                    <span className="text-base">Szczegóły oferty</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
