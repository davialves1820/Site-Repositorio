import './App.css';
import { NavBar } from "./components/nav_bar";
import {Banner} from "./components/banner";
import {Contact} from "./components/contact";
import { Footer } from './components/footer';
import { Skills } from './components/skills';
import { Project } from './components/projects';

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
