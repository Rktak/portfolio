import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";
import Header from './components/Header';
import Contact from './components/Contact';
import Skill from './components/Skill';
function App() {
  return (
    <div>
    <Nav/>
    <Header/>
    <Skill/>
    <Contact/>
    </div>
  );
}

export default App;
