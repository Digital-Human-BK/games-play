import { useState } from 'react';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Catalog from './components/GamesCatalog/Catalog';
import Create from './components/Create';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Details from './components/Details';

function App() {
  const [page, setPage] = useState('/');

  const navigationHandler = (path) => {
    console.log(path);
    setPage(path);
  };

  const router = (path) => {
    const [_, rootPath, param] = path.split('/');

    const routes = {
      '/': <WelcomeWorld onNavigate={navigationHandler} />,
      '/home': <WelcomeWorld onNavigate={navigationHandler}/>,
      '/catalog': <Catalog onNavigate={navigationHandler} />,
      '/create': <Create />,
      '/login': <Login />,
      '/register': <Register />,
      '/details': <Details id={param}/>,
    };

    return routes[`/${rootPath}`];
  };

  return (
    <div id='box'>
      <Header onNavigate={navigationHandler} />
      <main id='main-content'>
        {router(page) || <NotFound>Something went wrong!</NotFound>}
      </main>
    </div>
  );
}

export default App;
