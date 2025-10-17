"use client";
import Image from "next/image";

export default function Investment() {
  return (
    <section
      id="investment"
      className="w-full h-full flex flex-col items-center bg-grey relative scroll-mt-20"
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 pt-10 font-bold text-center break-words max-w-full">
          O INWESTYCJI
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center p-2 sm:px-10 gap-2 relative max-w-[1722px]">
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5">
          <div className="p-6 sm:p-8 lg:w-5/6 text-white" data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Dom stworzony z myślą o rodzinie
            </h2>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Przestronne wnętrza
              </h3>
              <p className="text-base sm:text-lg">
                Nowoczesny dom w zabudowie bliźniaczej z garażem i dużym ogrodem,
                zaprojektowany tak, aby zapewnić komfort codziennego życia.
                Powierzchnia całkowita 153 m² (użytkowa 146 m²) pozwala na wygodne zaaranżowanie
                przestrzeni dla całej rodziny.
                Salon z aneksem kuchennym o powierzchni ponad 42 m² to idealne miejsce na wspólne
                spędzanie czasu.
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Dodatkowy pokój na parterze
              </h3>
              <p className="text-base sm:text-lg">
                Na parterze znajduje się dodatkowe pomieszczenie, 
                które można przeznaczyć na biuro, pokój gościnny lub gabinet. 
                To rozwiązanie, które zwiększa funkcjonalność domu i dopasowuje go do 
                różnych stylów życia.
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Komfortowa strefa nocna
              </h3>
              <p className="text-base sm:text-lg">
                Na piętrze znajdują się cztery przestronne sypialnie, łazienka, garderoba
                oraz pomieszczenie gospodarcze.
                Przemyślany układ zapewnia wygodę domownikom i daje możliwość
                stworzenia prywatnej strefy dla każdego członka rodziny.
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Ogród i taras dla relaksu
              </h3>
              <p className="text-base sm:text-lg">
                Duży ogród z tarasem tworzy idealne miejsce do odpoczynku i spędzania czasu na świeżym powietrzu.
                To doskonała przestrzeń na spotkania z bliskimi,
                zabawę z dziećmi czy chwilę relaksu po pracy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center p-2 sm:px-10 sm:pb-10 gap-2 relative max-w-[1722px]">
        <div className="max-lg:hidden max-w-[551px] max-h-[413px] relative md:absolute md:w-3/10 lg:-left-0 lg:ml-32 flex justify-center items-center -mt-20 md:mt-0">
          <Image
            src="/przebieczany_tyl.jpg"
            alt="Modern houses"
            className="rounded-lg shadow-lg w-full h-auto"
            width={533}
            height={500}
            data-aos="fade-right"
          />
        </div>
        <div className="lg:hidden relative flex justify-center items-center overflow-hidden">
          <Image
            data-aos="fade-right"
            src="/przebieczany_tyl.jpg"
            alt="Modern houses"
            sizes="100vw"
            className="rounded-lg shadow-lg w-full h-full"
            width={533}
            height={500}
          />
        </div>
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5 justify-end ">
          <div className="p-6 sm:p-8 lg:w-3/5 text-white" data-aos="fade-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ">
              Jakość, która robi różnicę
            </h2>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 ">
                Staranność wykonania
              </h3>
              <p className="text-base sm:text-lg ">
                Dom wykonany jest z wysokiej jakości materiałów, 
                spełniających wszystkie normy. 
                Dach pokryto trwałą dachówką ceramiczną, 
                a całość zaprojektowano z dbałością o każdy szczegół.
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 ">
                Nowoczesne instalacje
              </h3>
              <p className="text-base sm:text-lg ">
                Standard obejmuje ogrzewanie gazowe, 
                pompę ciepła oraz ogrzewanie podłogowe, 
                które zapewniają niskie koszty utrzymania
                i komfort cieplny przez cały rok. 
                Garaż wyposażono w bramę sterowaną pilotem, 
                a w salonie zastosowano panoramiczne okna przesuwne HS, 
                które doskonale doświetlają wnętrze.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center pt-4 p-2 sm:px-10 gap-2 relative max-w-[1722px] overflow-hidden">
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5">
          <div className="p-6 sm:p-8 lg:w-full text-white" data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Lokalizacja, która ułatwia życie
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Dom położony jest w Przebieczanach, 
              w otoczeniu zieleni i domów jednorodzinnych. 
              To idealne miejsce dla osób, które cenią spokój, 
              ale nie chcą rezygnować z wygody szybkiego dojazdu do miasta.
            </p>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Blisko Krakowa i Wieliczki
              </h3>
              <p className="text-base sm:text-lg mb-4 sm:mb-6">
                Doskonała komunikacja z centrum Krakowa (ok. 25 km) 
                i Wieliczką sprawia, że codzienne dojazdy nie stanowią problemu. 
                Niedaleka autostrada A4 zapewnia wygodne podróże także w dalsze kierunki.
              </p>
            </div>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Wszystko w zasięgu ręki
              </h3>
              <p className="text-base sm:text-lg">
                W sąsiedztwie znajdują się sklepy, 
                szkoły, restauracje oraz tereny zielone. 
                Bliskość infrastruktury i przystanku komunikacji 
                miejskiej gwarantuje wygodę w codziennym funkcjonowaniu.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-green4 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-green1 transition"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/dhXX12CghkRApS7S9",
                    "_blank"
                  )
                }
              >
                Zobacz na mapie
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
