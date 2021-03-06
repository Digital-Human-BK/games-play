import { useEffect, useState, useCallback } from 'react';
import { getById } from '../services/gamesService';
import LoadingPage from './LoadingPage';

const Details = ({ match }) => {
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getGameData = useCallback(async () => {
    setIsLoading(true);
    const gameData = await getById(match.params.gameId);
    setGame(gameData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getGameData();
  }, [getGameData]);

  let content = (
    <section id='game-details'>
      <h1>Game Details</h1>
      <div className='info-section'>
        <div className='game-header'>
          <img className='game-img' src={game.imageUrl} alt='Game' />
          <h1>{game.title}</h1>
          <span className='levels'>MaxLevel: {game.maxLevel}</span>
          <p className='type'>{game.category}</p>
        </div>

        <p className='text'>{game.summary}</p>

        <div className='details-comments'>
          <h2>Comments:</h2>
          <ul>
            <li className='comment'>
              <p>Content: I rate this one quite highly.</p>
            </li>
            <li className='comment'>
              <p>Content: The best game.</p>
            </li>
          </ul>
          <p className='no-comment'>No comments.</p>
        </div>

        <div className='buttons'>
          <a href='#' className='button'>
            Edit
          </a>
          <a href='#' className='button'>
            Delete
          </a>
        </div>
      </div>

      <article className='create-comment'>
        <label>Add new comment:</label>
        <form className='form'>
          <textarea name='comment' placeholder='Comment......'></textarea>
          <input className='btn submit' type='submit' value='Add Comment' />
        </form>
      </article>
    </section>
  );

  return <>{isLoading ? <LoadingPage /> : content}</>;
};

export default Details;
