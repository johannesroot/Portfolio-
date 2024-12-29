
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Services from './components/Services/Services';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Header />
    <Main />
    <About />
    <Resume />
    <Services />
    <Skill />
    <Project />
    <Contact />
    <Footer />
    
    </>
  )
}

export default App
