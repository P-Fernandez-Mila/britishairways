"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AntdStyledComponentsRegistry from "./components/AntdStyledComponentsRegistry";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdStyledComponentsRegistry>
          <NavBar isLogged={isLogged} setIsLogged={setIsLogged} />
          {children}
          <Footer></Footer>
        </AntdStyledComponentsRegistry>
      </body>
    </html>
  );
}
