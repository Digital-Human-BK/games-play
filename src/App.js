import { useState } from 'react';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Catalog from './components/GamesCatalog/Catalog';
import Create from './components/Create';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';

function App() {
  const [page, setPage] = useState('/');

  const routes = {
    '/': <WelcomeWorld />,
    '/home': <WelcomeWorld />,
    '/catalog': <Catalog />,
    '/create': <Create />,
    '/login': <Login />,
    '/register': <Register />,
  };

  const navigationHandler = (path) => {
    console.log(path);
    setPage(path);
  };

  return (
    <div id='box'>
      <Header onNavigate={navigationHandler} />
      <main id='main-content'>
        {routes[page] || <NotFound>Something went wrong!</NotFound>}
      </main>
    </div>
  );
}

export default App;
