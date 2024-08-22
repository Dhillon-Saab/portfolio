import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_componenets/Navbar";
import Footer from "./_componenets/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amrit Singh Dhillon Portfolio",
  description: "Personal portfolio and blogging website for Amrit Singh Dhillon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar />{children}<Footer /></body>
    </html>
  );
}
