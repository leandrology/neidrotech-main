"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "../globals.css";
const inter = Roboto({ subsets: ["latin"], weight: ["400", "300"] });

const Aeonik = localFont(
  {
    src: [{
      path: "../../public/fonts/Aeonik.ttf",
      weight: "400",
      style: "normal"
    }],
    variable: "--font-aeonik"
  }
)

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`dark:bg-black ${Aeonik.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          {/* <Lines /> */}
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
