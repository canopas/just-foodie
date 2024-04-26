"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Providers from "../../pages/providers";
import Head from "next/head";

export default function LayoutWithoutFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark:bg-black">
      <Head>
        <title>Bite Space</title>
      </Head>
      <Providers>
        <Header />
        {children}
      </Providers>
    </div>
  );
}
