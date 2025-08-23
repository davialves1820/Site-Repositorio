import './App.css';
import { NavBar } from "./components/nav_bar/nav_bar";
import { Banner } from "./components/banner/banner";
import { Contact } from "./components/contact/contact";
import { Footer } from './components/footer/footer';
import { Skills } from './components/skills/skills';
import { Project } from './components/projects/projects';

function App() {

  return (
    <div className='App'>
        <NavBar/> {/* Renderiza a barra de navegação */}
        
        <Banner/>

        <Skills/>

        <Project/>

        <Contact/>

        <Footer/>
    </div>
  )
}

export default App
