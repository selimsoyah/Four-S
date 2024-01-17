import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import MainPart from './components/MainPart';
import Presentation from './components/Presentation';
import Owl from './components/Owl';
import Footer from './components/Footer';
import Email from './components/Email'
import Cabinet from './components/Cabinet';
import Fondateur from './components/Fondateur';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<>
          <MainPart />
          <Presentation />
          <Owl />
          <Email />
        </>} />
        <Route path='/cabinet' element={<Cabinet />} />
        <Route path='/Fondateur' element={<Fondateur />} />
        <Route path='/Conatct' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
