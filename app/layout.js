
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
  title: "Md. Emon Sheikh",
  description: "This portfolio site created for Md. Emon Sheikh",
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
