import './App.css';
import ChuckNorrisJoke from './components/ApiPage';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Home/>
      <Projects/>
      <Skills/>
      <Resume/>
      <ChuckNorrisJoke/>
      <Footer/>
    </div>
  );
}

export default App;
