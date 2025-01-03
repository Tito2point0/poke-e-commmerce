import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Ensure the filename is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason's Dev E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow pb-40">{children}</main> {/* Adds padding to bottom */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
