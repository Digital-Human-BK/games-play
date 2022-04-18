import { useState, useEffect, useCallback } from 'react';
import { getLatest } from '../services/gamesService';
import LatestGamesCard from './GamesCatalog/LatestGamesCard';
import LoadingPage from './LoadingPage';
import NotFound from './NotFound';

const WelcomeWorld = () => {
  const [latestGames, setLatestGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGames = useCallback(async () => {
    setIsLoading(true);
    try {
      const games = await getLatest();
      setLatestGames(games);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  let content = <p className='no-articles'>No games yet</p>;

  if (latestGames.length > 0) {
    content = latestGames.map((g) => {
      return <LatestGamesCard key={g._id} game={g} />;
    });
  }

  if (error) {
    content = <NotFound>{error}</NotFound>;
  }

  return (
    <section id='welcome-world'>
      <div className='welcome-message'>
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      {isLoading && <LoadingPage/>}
      <img src='/images/four_slider_img01.png' alt='hero' />

      <div id='home-page'>
        <h1>Latest Games</h1>
        {!isLoading && content}
      </div>
    </section>
  );
};

export default WelcomeWorld;
