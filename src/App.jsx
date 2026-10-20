import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Properties from './components/Properties';
import Method from './components/Method';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Properties />
        <Method />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;