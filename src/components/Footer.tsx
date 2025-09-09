import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="w-full h-full flex flex-col ">
        <div className="flex flex-col lg:flex-row bg-green3 justify-between p-5">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
            <Link
              href="https://www.n20.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <Image
                src="/n20logo.png"
                alt="N20"
                width={212}
                height={144}
                className="p-2"
              />
            </Link>
            <Link
              href="https://main.d2ilhc9l1y269y.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <Image
                src="/logo_generator.png"
                alt="N20"
                width={138.5}
                height={122}
                className="p-2"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 lg:mt-0">
            <div className="flex flex-row gap-4">
              <Link
                href="https://www.facebook.com/N20RealEstate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <Image
                  src="/Facebook_icon.png"
                  alt="Facebook"
                  width={80}
                  height={80}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
              <Link
                href="https://www.instagram.com/n20_nieruchomosci?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <Image
                  src="/Instagram_icon.png"
                  alt="Instagram"
                  width={80}
                  height={80}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
            </div>
            <Link
              href="https://www.n20.pl/polityka-prywatnosci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm lg:text-lg mt-5"
            >
              Polityka Prywatności
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center py-2 px-4 bg-signature text-white">
          <p className="my-2 text-center md:text-left">2025 Policrafts ©</p>
          <div className="text-center md:text-right">
            <p className="text-signature_text p-0 m-0">
              Wizualizacje: Maciej Krzyszkowski
            </p>
            <p className="text-signature_text p-0 m-0">
              Realizacja witryny: Rafał Ciupek
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
