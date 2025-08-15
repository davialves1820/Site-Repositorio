import './App.css';
import { NavBar } from "./components/nav_bar";
import {Banner} from "./components/banner";
import {EmailForm} from "./components/email_form"
import { Footer } from './components/footer';

function App() {

  return (
    <div className='App'>
        <NavBar/> {/* Renderiza a barra de navegação */}
        
        <Banner/>

        <EmailForm/>

        <Footer/>
    </div>
  )
}

export default App
