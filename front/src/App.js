import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import MainPart from './components/MainPart';
import Presentation from './components/Presentation';
import Owl from './components/Owl';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <MainPart/>
        <Presentation/>
        <Owl/>
    </div>
  );
}

export default App;
