
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/HeaderComponents/Header";
import Footer from "./Components/Footer";
import { white } from "tailwindcss/colors";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Md. Emon Sheikh | Frontend Developer",
  description: "Personal portfolio of Md. Emon Sheikh, a passionate frontend developer specialized in React, Next.js, and modern web tech.",
  verification: {
    google: "Wevh0EJoXv7Ph4SY5z0TrIfLqb1mESgSEd7pILyY-xc", // ✅ your code here
  },
  openGraph: {
    title: "Md. Emon Sheikh | Frontend Developer",
    description: "Showcasing projects and skills in modern frontend development.",
    url: "https://emon1112.vercel.app/",
    siteName: "Md. Emon Sheikh Portfolio",
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-black text-white font-serif"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
