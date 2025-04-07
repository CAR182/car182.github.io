import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from 'contexts/theme';
import { Header, Footer } from 'components';
import { Home } from 'containers';
import { projects } from 'portfolio';

import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          {projects.map((project) => (
            <Route path={`/${project.name.toLowerCase()}`} element={project.element} />
          ))}
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
