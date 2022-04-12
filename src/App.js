import { useState } from 'react';

import Header from './components/Header';
import Catalog from './components/Catalog';
import Create from './components/Create';
import WelcomeWorld from './components/WelcomeWorld';

function App() {
  const [page, setPage] = useState('/');

  const routes = {
    '/': <WelcomeWorld />,
    '/home': <WelcomeWorld />,
    '/catalog': <Catalog />,
    '/create': <Create />,
  };

  const navigationHandler = (path) => {
    console.log(path);
    setPage(path)
  };

  return (
    <div id='box'>
      <Header onNavigate={navigationHandler} />
      <main id='main-content'>{routes[page] || <p>Not found!</p>}</main>
    </div>
  );
}

export default App;
