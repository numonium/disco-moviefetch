import { useRef } from 'react';
import { TMDB } from 'tmdb-ts';

export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_V4 || '';

export enum TMDBMediaType {
  movie = 'movie',
  tv = 'tv',
  person = 'person'
}

export enum TMDBTimeWindow {
  day = 'day',
  week = 'week'
}

export const useTMDB = (apiKey = TMDB_API_KEY) => {
  const tmdb = new TMDB(apiKey);
  const apiRef = useRef(tmdb);

  return {
    apiRef,
    tmdb
  };
};

export default useTMDB;
