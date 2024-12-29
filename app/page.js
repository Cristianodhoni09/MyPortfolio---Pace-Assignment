import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Skills from './components/Skills/Skills';

export default function HomePage() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Achievements />
      <Skills />
    </div>
  );
}
