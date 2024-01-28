import './App.css';
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
    </div>
  );
}

export default App;
