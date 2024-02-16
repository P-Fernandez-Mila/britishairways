"use client";
import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import AntdStyledComponentsRegistry from "./components/AntdStyledComponentsRegistry";
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
        <link rel="shortcut icon" href="/app/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        ></link>
        <title>British Airways</title>
      </head>
      <body className={inter.className}>
        <AntdStyledComponentsRegistry>
          <LoginStateProvider>
            <div className="flex flex-col justify-between min-h-screen h-full content-wrapper background-tint">
              <NavBar />
              <Suspense fallback={<Loading />} />
              <div className="flex flex-col justify-start grow children-wrapper">
                {children}
              </div>
              <Footer></Footer>
            </div>
          </LoginStateProvider>
        </AntdStyledComponentsRegistry>
      </body>
    </html>
  );
}
