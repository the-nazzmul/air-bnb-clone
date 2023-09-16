import Navbar from "@/components/NavBar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Air BnB",
  description: "Clone of Air BnB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
