import * as genereAPI from './fakeGenreService';

const movies = [
  {
    _id: '5b21ca3eeb7f6fbccd471815',
    title: 'Terminator',
    genre: {
      _id: '6b21ca3eeb7f6fbccd471818',
      name: 'Action',
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: '2018-01-03T19:04:28.809Z',
    liked: true,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471816',
    title: 'Die Hard',
    genre: {
      _id: '6b21ca3eeb7f6fbccd471818',
      name: 'Action',
    },
    numberInStock: 5,
    dailyRentalRate: 3.5,
    publishDate: '2018-11-03T19:04:28.809Z',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471817',
    title: 'Dunkirk',
    genre: {
      _id: '6b21ca3eeb7f6fbccd471818',
      name: 'Action',
    },
    numberInStock: 9,
    dailyRentalRate: 3.0,
    publishDate: '2018-10-03T19:04:28.809Z',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471818',
    title: 'Jarhard',
    genre: {
      _id: '6b21ca3eeb7f6fbccd471818',
      name: 'Action',
    },
    numberInStock: 9,
    dailyRentalRate: 2.8,
    publishDate: '2019-21-03T19:04:28.809Z',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471819',
    title: 'Into The Wild',
    genre: {
      _id: '6b21ca3eeb7f6fbccd471819',
      name: 'Adventure',
    },
    numberInStock: 5,
    dailyRentalRate: 3.5,
    publishDate: '2019-11-03T19:04:28.809Z',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471820',
    title: 'The Great Wall',
    genre: {
      _id: '6b21ca3eeb7f6fbccd471819',
      name: 'Adventure',
    },
    numberInStock: 7,
    dailyRentalRate: 3.0,
    publishDate: '2020-01-03T19:04:28.809Z',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471821',
    title: 'Clash of the Titan',
    genre: {
      _id: '6b21ca3eeb7f6fbccd471819',
      name: 'Adventure',
    },
    numberInStock: 8,
    dailyRentalRate: 4.5,
    publishDate: '2019-08-03T19:04:28.809Z',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471822',
    title: 'The Call of The Wild',
    genre: {
      _id: '6b21ca3eeb7f6fbccd471819',
      name: 'Adventure',
    },
    numberInStock: 12,
    dailyRentalRate: 3.0,
    publishDate: '2019-03-03T19:04:28.809Z',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471823',
    title: 'Shutter Island',
    genre: {
      _id: '6b21ca3eeb7f6fbccd471820',
      name: 'Crime',
    },
    numberInStock: 18,
    dailyRentalRate: 4.8,
    publishDate: '2018-11-03T19:04:28.809Z',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471824',
    title: 'The Art of the Steal',
    genre: {
      _id: '6b21ca3eeb7f6fbccd471820',
      name: 'Crime',
    },
    numberInStock: 10,
    dailyRentalRate: 4.0,
    publishDate: '2017-11-03T19:04:28.809Z',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471825',
    title: 'Red Dragon',
    genre: {
      _id: '6b21ca3eeb7f6fbccd471820',
      name: 'Crime',
    },
    numberInStock: 5,
    dailyRentalRate: 3.5,
    publishDate: '2020-11-03T19:04:28.809Z',
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieIndb = movies.find((m) => m._id === movie._id) || {};
  movieIndb.title = movie.title;
  movieIndb.genre = genereAPI.genres.find((g) => g._id === movie.genreId);
  movieIndb.numberInStock = movie.numberInStock;
  movieIndb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieIndb._id) {
    movieIndb._id = Date.now.toString();
    movies.push(movieIndb);
  }

  return movieIndb;
}
