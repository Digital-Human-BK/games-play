const GameCard = ({ game, onNavigate }) => {
  const detailsHandler = (ev) => {
    ev.preventDefault();

    onNavigate(`/details/${game._id}`);
  };

  return (
    <div className='allGames'>
      <div className='allGames-info'>
        <img src={game.imageUrl} alt='Game'/>
        <h6>{game.category}</h6>
        <h2>{game.title}</h2>
        <a href={`/details/${game._id}`} onClick={detailsHandler} className='details-button'>
          Details
        </a>
      </div>
    </div>
  );
};

export default GameCard;
