
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Service from './components/services/Service';
import SkillsSection from './components/skillsSection/SkillsSection';
function App() {
  return (
  <>
    <Header />
    <div className="main">
        <Home />
        <About />
        <SkillsSection />
        <Service />
    </div>
  </>
  );
}

export default App;
