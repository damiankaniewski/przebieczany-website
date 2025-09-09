"use client";

import "./globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Head from "@/app/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  );
}
