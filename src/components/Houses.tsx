"use client";
import Image from "next/image";
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
      case 3:
        return "Niedostępny"
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
          "https://tfh4nuq7h6.execute-api.eu-central-1.amazonaws.com/prod/get-items"
        );
        console.log(response);
        const data = await response.json();
        const sortedData = data.body.sort((a: any, b: any) =>
          Number(a.id) - Number(b.id)
        );

        const combinedData = sortedData.map((house: any) => {
          return {
            ...house,
            status: house.dostepnosc,
            cenam2: house.cena && house.metraz ? formatPrice((house.cena / house.metraz).toFixed(2)): "Brak danych",
            cena30: house.cena30 ? formatPrice(house.cena30) : house.cena30,
            cena: house.cena ? formatPrice(house.cena) : house.cena,
          };
        });
        setHouseOffers(combinedData);
      } catch (error) {
        alert("Błąd podczas pobierania danych");
        console.log("Błąd podczas pobierania danych: ", error);
      }
    };
    fetchHouseOffers();
  }, []);

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
        <div className="w-full md:w-[55%] flex justify-center md:justify-start items-start relative flex-col">
          <div className="max-lg:hidden w-full relative">
            <Image
              src="/przebieczany_front_domy_2.jpg"
              alt="Estate"
              sizes="50vw"
              className="rounded-lg shadow-lg w-full h-full max-h-[80vh] object-cover"
              width={300}
              height={800}
              data-aos="fade-down"
            />
          </div>
          <div className="lg:hidden w-full relative">
            <Image
              src="/przebieczany_front_domy.jpg"
              alt="Estate"
              sizes="70vw"
              className="rounded-lg shadow-lg w-full h-auto"
              width={300}
              height={800}
              data-aos="fade-down"
            />
          </div>
        </div>

        <div
          ref={listRef}
          className="w-full md:w-4/5 flex justify-center items-start overflow-y-auto 2xl:max-h-[65vh] lg:max-h-[40vh] md:max-h-[40vh]"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full h-full">
            {houseOffers.map((house, index) => (
              <div
                key={index}
                id={`house-${house.numer}`}
                className="flex flex-col bg-white p-4 rounded-lg shadow-md space-y-4"
              >
                <div>
                  <div className="flex flex-row gap-4">
                    <p className="text-green4 text-xl font-semibold">
                    Dom nr {house.numer}
                    </p>
                  <p className="text-gray-600">
                    {" "}
                    <span
                      className={`${
                        house.status === 0
                          ? "text-red-500"
                          : house.status === 1
                          ? "text-green-500"
                          : house.status === 3
                          ? "text-gray-500"
                          : "text-yellow-500"
                      } font-semibold`}
                    >
                      {getStatusText(house.status)}
                    </span>
                  </p>
                  </div>
                  <div className={`${ house.status === 3 ? 'hidden' : null}`}>
                    <div className="flex flex-row gap-4">
                      <p className="text-gray-600">Metraż: {house.metraz} m²</p>
                      <p className="text-gray-600">Pokoje: {house.pokoje}</p>
                    </div>
                    <div className="flex flex-row gap-4">
                      {(
                        <p className="text-gray-600 font-bold">
                          Cena: {house.cena} zł
                        </p>
                      )}
                      {(
                        <p className="text-gray-600 font-bold">
                          Cena za m²: {house.cenam2} zł
                        </p>
                      )}
                      {(
                        <p className="text-gray-600 font-bold max-xl:hidden">
                          Najniższa cena z 30 dni: {house.cena30} zł
                        </p>
                      )}
                    </div>
                    <div className="flex">
                        <p className="text-gray-600 font-bold xl:hidden">
                          Najniższa cena z 30 dni: {house.cena30} zł
                        </p>
                    </div>
                  </div>
                  <div className={`${house.status === 3 ?  'hidden' : 'mt-4 w-full'}`}>
                    <a
                      className="w-full bg-green2 p-4 rounded-xl text-white flex justify-center items-center gap-2 hover:bg-green3 transition-all duration-200"
                      href={"/kartyMieszkań/karta_domu.pdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDownload className="w-5 h-5" />
                      <span className="text-base">Szczegóły oferty</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
