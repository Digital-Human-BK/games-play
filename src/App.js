import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Catalog from './components/GamesCatalog/Catalog';
import Create from './components/Create';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Details from './components/Details';

function App() {
  return (
    <div id='box'>
      <Header />

      <main id='main-content'>
        <Switch>
          <Route path='/' exact component={WelcomeWorld} />
          <Route path='/home' exact component={WelcomeWorld} />
          <Route path='/catalog' exact component={Catalog} />
          <Route path='/catalog/:gameId' component={Details} />
          <Route path='/create' exact component={Create} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route
            path='/logout'
            exact
            rendert={(props) => {
              console.log(props);
              console.log('Logged Out');
              //props.history.push()
              return <Redirect to='/' />;
            }}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
