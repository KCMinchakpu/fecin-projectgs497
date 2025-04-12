import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/components/providers/AuthProvider"; // Import the AuthProvider

const inter = Inter({ subsets: ["latin"] });

// Export metadata for Server-side
export const metadata = {
  title: "FECIN Bible Translation Project",
  description: "This is the official FECIN Bible Translation Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap client-side components inside AuthProvider */}
        <AuthProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}