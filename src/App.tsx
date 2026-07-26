import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Features from "./components/Features";
import Process from "./components/Process";
import Contact from "./components/Contact";
import { LanguageProvider } from "./i18n/LanguageContext";
import "./index.css";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Features />
        <Process />
        <Contact />
      </main>
    </LanguageProvider>
  );
}

export default App;
