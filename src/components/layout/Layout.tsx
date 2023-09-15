'use client'

import React from "react";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Footer from "../footer/footer";
// import HeaderMain from "../HeaderMain";
import Header from "../header";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>SmartSpend</title>
      </Head>
      <div className="flex flex-col min-h-[100vh]">

        <Header />

        <main className="flex-grow  md:mt-10">{children}</main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
