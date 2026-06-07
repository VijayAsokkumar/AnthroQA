import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import About from "./components/About";
import Nilaai from "./components/Nilaai";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Topics />
      <Articles />
      <About />
      <Nilaai />
      <Footer />
    </main>
  );
}