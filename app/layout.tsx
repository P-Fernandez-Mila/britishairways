"use client";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import AntdStyledComponentsRegistry from "./components/AntdStyledComponentsRegistry";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { LoginStateProvider } from "./utils/LoginState";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoginStateProvider>
          <AntdStyledComponentsRegistry>
            <NavBar />
            {children}
            <Footer></Footer>
          </AntdStyledComponentsRegistry>
        </LoginStateProvider>
      </body>
    </html>
  );
}
