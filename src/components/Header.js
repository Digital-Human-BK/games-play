const Header = ({ 
  onNavigate,
}) => {

  const onHeaderClick = (ev) => {
    ev.preventDefault();

    if (ev.target.tagName === 'A') {
      let url = new URL(ev.target.href);

      onNavigate(url.pathname);
    }
  };

  return (
    <header onClick={onHeaderClick}>
      <h1>
        <a className='home' href='/'>
          GamesPlay
        </a>
      </h1>
      <nav>
        <a href='/catalog'>All games</a>
        <div id='user'>
          <a href='/create'>Create Game</a>
          <a href='/logout'>Logout</a>
        </div>
        <div id='guest'>
          <a href='/login'>Login</a>
          <a href='/register'>Register</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
