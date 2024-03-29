import { light } from "@fortawesome/fontawesome-svg-core/import.macro";
import FooterEnd from "../Components/FooterEnd";
import FooterMail from "../Components/FooterMail";
import Hero from "../Components/Hero";
import NewProducts from "../Components/NewProducts";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dark mode demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-col main-h-screen p-16 items-center justify-between overflow-hidden">
        <Hero />
        <NewProducts />
      </main>
      <FooterEnd />
      <FooterMail />
    </>
  );
}
