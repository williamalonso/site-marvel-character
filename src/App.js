import ContentComponent from './components/Content/ContentComponent';
import FooterComponent from './components/Footer/FooterComponent';
import NavbarComponent from './components/Navbar/NavbarComponent';
import './index.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <ContentComponent></ContentComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
