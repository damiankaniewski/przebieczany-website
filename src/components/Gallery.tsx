"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Gallery() {
  const galleryImages = [
    "/render1.jpg",
    "/render2.jpg",
    "/render3.jpg",
    "/render4.jpg",
    "/renderZGory2.jpg",
  ];

  return (
    <section
      id="gallery"
      className="w-full h-full flex flex-col items-center bg-grey relative scroll-mt-28"
    >
      <div
        className="w-full lg:w-7/12 rounded-lg"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center rounded-lg">
              <Image
                src={src}
                alt={`Galeria ${index + 1}`}
                width={1200}
                height={500}
                className="rounded-lg shadow-lg object-cover"
                unoptimized
                quality={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
