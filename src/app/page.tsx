import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import Investment from "@/components/Investment";
import Profits from "@/components/Profits";
import Houses from "@/components/Houses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" h-full w-full">
      <div
        className="bg-render1_mobile md:bg-render1 bg-cover bg-center h-screen w-full absolute opacity-60"
        data-aos="fade-in"
        data-aos-duration="3000"
      />
      <div className="h-full w-full overflow-hidden">
        <Header />
        <HomeSection />
        <Investment />
        <Profits />
        <Houses />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
