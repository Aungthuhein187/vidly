export const genres = [
  { _id: '6b21ca3eeb7f6fbccd471818', name: 'Action' },
  { _id: '6b21ca3eeb7f6fbccd471819', name: 'Adventure' },
  { _id: '6b21ca3eeb7f6fbccd471820', name: 'Crime' },
];

export function getGenres() {
  return genres.filter((g) => g);
}

export function getGenre(id) {
  return genres.filter((g) => g._id === id);
}
