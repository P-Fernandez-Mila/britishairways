"use client";
import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "@/loading";
import { LoginStateProvider } from "./utils/LoginState";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>British Airways</title>
      </head>
      <body className={inter.className}>
        <LoginStateProvider>
          <div className="flex flex-col justify-between min-h-screen h-full">
            <NavBar />
            <Suspense fallback={<Loading />} />
            <div className="flex flex-col justify-start grow">{children}</div>
            <Footer></Footer>
          </div>
        </LoginStateProvider>
      </body>
    </html>
  );
}
