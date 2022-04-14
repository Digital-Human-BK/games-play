import { useEffect, useState, useCallback } from 'react';
import { getAll } from '../../services/gamesService';

import LoadingPage from '../LoadingPage';
import NotFound from '../NotFound';
import GameCard from './GameCard';

const Catalog = ({ onNavigate }) => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGames = useCallback(async () => {
    setIsLoading(true);
    try {
      const gamesData = await getAll();

      setGames(gamesData);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  let content = <h3 className='no-articles'>No articles yet</h3>;

  if (games.length > 0) {
    content = games.map((data) => (
      <GameCard onNavigate={onNavigate} key={data._id} game={data} />
    ));
  }

  if (error) {
    content = <NotFound>{error}</NotFound>;
  }

  return (
    <section id='catalog-page'>
      <h1>All Games</h1>
      {isLoading ? <LoadingPage /> : content}
    </section>
  );
};

export default Catalog;
