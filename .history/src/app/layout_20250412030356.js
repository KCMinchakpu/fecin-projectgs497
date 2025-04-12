import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FECIN Bible Translation Project",
  description: "This is the official FECIN Bible Translation Project",
};

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
