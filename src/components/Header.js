import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const navStyles = {
    textDecoration: 'underline',
  };
  return (
    <header>
      <h1>
        <NavLink className='home' to='/'>
          GamesPlay
        </NavLink>
      </h1>
      <nav>
        <NavLink activeStyle={navStyles} to='/catalog'>All games</NavLink>
        <div id='user'>
          <NavLink activeStyle={navStyles} to='/create'>Create Game</NavLink>
          <NavLink activeStyle={navStyles} to='/logout'>Logout</NavLink>
        </div>
        <div id='guest'>
          <NavLink activeClassName='active-header-link' to='/login'>Login</NavLink>
          <NavLink activeStyle={{textDecoration: 'underline'}} to='/register'>Register</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
