import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import MainPart from './components/MainPart';
import Presentation from './components/Presentation';
import Owl from './components/Owl';
import Footer from './components/Footer';
import Email from './components/Email'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <MainPart/>
        <Presentation/>
        <Owl/>
        <Email/>
        <Footer/>
       
    </div>
  );
}

export default App;
