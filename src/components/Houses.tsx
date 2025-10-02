"use client";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function Houses() {
  const listRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!imageRef.current || !listRef.current) return;

      const updateHeight = () => {
        if (window.innerWidth >= 768) { 
          listRef.current!.style.height = imageRef.current!.clientHeight + "px";
        } else {
          listRef.current!.style.height = "auto";
        }
      };
    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(imageRef.current);

    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [houseOffers]);

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

      <div className="w-full px-6 lg:px-10 py-10 flex items-start gap-10 md:h-auto">
        <div className="w-full md:w-full flex justify-center md:justify-start items-start relative flex-col md:flex-row gap-6">
          <div ref={imageRef} className="max-md:hidden w-3/4 relative">
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
          <div className="md:hidden w-full relative">
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
          <div
            ref={listRef}
            className="w-full flex justify-center items-start overflow-y-auto"
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
                          <div className="flex flex-row gap-1 group relative">
                            <FaInfoCircle className='text-gray-600 cursor-pointer mt-1'/>     
                            {
                              <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-200 rounded-lg shadow-lg p-4 z-50 w-64">
                                <div className="text-gray-600 font-bold block mb-2">
                                  <p>Najniższa cena z 30 dni:</p>
                                  <p className="ml-1">{house.cena30} zł</p> 
                                </div>
                                <p className="text-gray-600 font-bold mb-2">Historia cen:</p>
                                
                                {house.price_history && house.price_history.length > 0 ? (
                                  <ul className="text-gray-600 font-bold gap-2 ml-1">
                                    {house.price_history.map((entry: any, id: number) => (
                                      <li key={id}>
                                        {new Date(entry.date).toLocaleDateString("pl-PL")} -{" "}
                                        {formatPrice(entry.cena)} zł
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-gray-600 font-bold gap-2 ml-1">Brak historii cen</p>
                                )}
                              </div>
                            }
                          </div>
                          {(
                            <p className="text-gray-600 font-bold -ml-2">
                              Cena: {house.cena} zł
                            </p>
                          )}
                          {(
                            <p className="text-gray-600 font-bold max-sm:hidden">
                              Cena za m²: {house.cenam2} zł
                            </p>
                          )}  
                      </div>
                      <div className="flex flex-col">
                        <p className="text-gray-600 font-bold sm:hidden">
                          Cena za m²: {house.cenam2} zł
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
      </div>
    </section>
  );
}
