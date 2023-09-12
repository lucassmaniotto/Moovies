import React, { useEffect, useState } from 'react';
import get from 'lodash/get';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

import {
  Container,
  LoadingSpinner,
  RequestError,
} from '../../components/UI/shared/global-components';
import { MovieItem, MovieList } from './styles';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noMovies, setNoMovies] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/movies');
        setMovies(response.data);
        if (response.data.length === 0) {
          setNoMovies(true);
        }
      } catch (error) {
        setError('Erro ao carregar filmes ❌');
        toast.error('Erro ao carregar filmes');
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      {error ? (
        <RequestError>{error}</RequestError>
      ) : isLoading ? (
        <LoadingSpinner>
          <div className="spinner" />
        </LoadingSpinner>
      ) : noMovies ? (
        <RequestError>Não há filmes cadastrados 🪰</RequestError>
      ) : (
        <MovieList>
          {movies.map((movie) => (
            <MovieItem key={movie.id}>
              {get(movie, 'poster.url', false) ? (
                <img src={movie.poster.url} alt={movie.title} />
              ) : (
                <img
                  src="https://via.placeholder.com/300x450.png?text=Sem+imagem"
                  alt={movie.title}
                />
              )}
              <div className="movie-info__wrapper">
                <h2>{movie.title}</h2>
                <p>{movie.synopsis}</p>
              </div>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </Container>
  );
}
