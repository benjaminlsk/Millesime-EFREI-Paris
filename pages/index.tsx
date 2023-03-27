import Head from "next/head";
import BackgroundParalax from "../components/BackgroungParalax";
import Picker from "../components/Calendar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Team from "../components/Team";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2 px-3">
      <Head>
        <title>Millésime EFREI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BackgroundParalax />
      <Team />
      <Picker />
      <Footer />
    </div>
  );
}
