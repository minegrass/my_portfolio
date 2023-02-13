import Head from "next/head";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import MoreMe from "../components/MoreMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomato Wilbur Yap</title>
        <meta name="description" content="Tomato Wilbur Yap Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>
      <main>
        <div className="flex justify-center items-center">
          <AboutMe />
        </div>
        <div className="flex justify-center items-center">
          <MoreMe />
        </div>
        <div className="flex justify-center items-center">
          <Projects />
        </div>
        <div>
          <ContactMe />
        </div>
      </main>
      <footer className="flex justify-center items-center text-gray-500 p-10 pb-5">
        ©Copyright {new Date().getFullYear()} Tomato Wilbur Yap
      </footer>
    </>
  );
}
