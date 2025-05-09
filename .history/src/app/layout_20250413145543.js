"use client"; 

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
