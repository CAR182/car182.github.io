import { Fragment, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'routes/Home';
import { About } from 'routes/About';
import { Iro } from 'routes/Iro';
import Menu from 'components/Menu';
import Header from 'components/Header';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    console.log('OnClick: ', !isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header onClickHandler={onClick} />
      <Menu isOpen={isOpen} close={onClick} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project-iro' element={<Iro />} />
      </Routes>
    </>
  );
}

export default App;
