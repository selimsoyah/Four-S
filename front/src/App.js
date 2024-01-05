import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import MainPart from './components/MainPart';
import Presentation from './components/Presentation';
import Owl from './components/Owl';
import Footer from './components/Footer';
import Email from './components/Email'
import Cabinet from './components/Cabinet';
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
