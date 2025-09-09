"use client";
import { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaMobile } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyPolicy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        target.type === "checkbox"
          ? (target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);

    const now = Date.now();
    if (lastSubmissionTime && now - lastSubmissionTime < 60000) {
      alert(
        "Wiadomość została już wysłana. Poczekaj przed wysłaniem kolejnej."
      );
      setIsSubmitting(false);
      return;
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message ||
      !formData.privacyPolicy
    ) {
      alert("Proszę wypełnić wszystkie pola!");
      setIsSubmitting(false);
      return;
    }

    const body = {
      email: "biuro@n20.pl",
      subject: `Domy przy Brzozowej - Wiadomość od: ${formData.name}`,
      message: `Imię i nazwisko: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone}\n\n${formData.message}`,
    };

    try {
      const response = await fetch(
        "https://jc5vg6se5e.execute-api.eu-north-1.amazonaws.com/dev/send-mail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "_just-a'test\"key,or>is<it?",
          },
          body: JSON.stringify(body),
        }
      );
      if (response.ok) {
        alert("Wiadomość została wysłana pomyślnie!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          privacyPolicy: false,
        });
        setLastSubmissionTime(now);
      } else {
        throw new Error("Błąd podczas wysyłania wiadomości");
      }
    } catch (error) {
      alert("Nie udało się wysłać wiadomości. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center bg-grey relative scroll-mt-20 py-10 px-4"
    >
      <div className="max-w-screen-xl w-full text-center">
        <div>
          <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 font-bold break-words max-w-full">
            KONTAKT
          </p>
        </div>
        <p className="text-lg md:text-3xl font-bold text-green2 pt-3">
          Masz jakieś pytania? Zainteresowała Cię nasza oferta? Zapraszamy
          serdecznie do kontaktu.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
          <div className="w-full flex items-stretch">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3194.8443747714277!2d20.140027999999997!3d50.013461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDAwJzQ4LjUiTiAyMMKwMDgnMjQuMSJF!5e1!3m2!1spl!2spl!4v1735824868741!5m2!1spl!2spl"
              frameBorder="0"
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>

          <div className="w-full flex items-stretch">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg rounded-lg p-6 flex-grow flex flex-col"
            >
              <div className="mb-1">
                <label
                  htmlFor="name"
                  className="block text-lg font-bold text-gray-700"
                >
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 mt-2 border text-black border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-wrap -mx-2 mb-1">
                <div className="w-full sm:w-1/2 px-2">
                  <label
                    htmlFor="email"
                    className="block text-lg font-bold text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border text-black border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  <label
                    htmlFor="phone"
                    className="block text-lg font-bold text-gray-700"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-2 border text-black border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mb-1">
                <label
                  htmlFor="message"
                  className="block text-lg font-bold text-gray-700"
                >
                  Treść wiadomości
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 text-black rounded-md h-28 resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-center mb-1">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                <label
                  htmlFor="privacyPolicy"
                  className="text-gray-700 text-sm"
                >
                  Zgadzam się z polityką prywatności
                </label>
              </div>

              <button
                type="submit"
                className="mt-auto w-full py-3 bg-green2 text-white text-lg rounded-md shadow-md hover:bg-green4 transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wysyłanie..." : "Wyślij"}
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-8 gap-6">
          <a
            href="https://www.n20.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <Image
              src="/n20logoCzarne.png"
              alt="N20"
              width={255}
              height={160}
            />
          </a>
          <div className="text-left font-bold text-gray-800 max-w-md">
            <h2 className="text-xl md:text-2xl mb-3">
              Kontakt biura nieruchomości
            </h2>
            <p className="text-sm md:text-base flex items-center">
              <FaEnvelope className="text-orange-500 mr-2" />
              biuro@n20.pl
            </p>
            <p className="text-sm md:text-base flex items-center">
              <FaPhone className="text-orange-500 mr-2" />
              +48 12 433 38 78
            </p>
            <p className="text-sm md:text-base flex items-center">
              <FaMobile className="text-orange-500 mr-2" />
              +48 790 557 504
            </p>
            <p className="text-sm md:text-base flex items-center">
              <FaMobile className="text-orange-500 mr-2" />
              +48 790 557 057
            </p>
            <p className="text-sm md:text-base flex items-center">
              <FaLocationDot className="text-orange-500 mr-2" />
              Plac Wolnica 13/21, 31-060 Kraków
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
