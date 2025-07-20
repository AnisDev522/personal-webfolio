import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-slate-200 leading-relaxed overflow-x-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Education />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}

export default App;