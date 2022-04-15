const LatestGamesCard = ({ game, onNavigate }) => {
  const clickHandler = (ev) => {
    ev.preventDefault();

    onNavigate(`/details/${game._id}`);
  };

  return (
    <div className='game'>
      <div className='image-wrap'>
        <img src={game.imageUrl} alt='game' />
      </div>
      <h3>{game.title}</h3>
      <div className='rating'>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
      <div className='data-buttons'>
        <a
          href={`/details/${game._id}`}
          onClick={clickHandler}
          className='btn details-btn'
        >
          Details
        </a>
      </div>
    </div>
  );
};

export default LatestGamesCard;
