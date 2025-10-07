import type { Show, User, Episode, Watched } from './index';

let showId: number = 0; 
let userId: number = 0;
let episodeId: number = 0;
let watchedId: number = 0;

// SHOWS
const shows: Show[] = [
  { title: 'Berserk', episodes: 25 },
  { title: 'Ganz',  episodes: 26 },
  { title: 'Full Metal Alchemist',  episodes: 51 },
  { title: 'Ghost in the Shell',  episodes: 14 },
  { title: 'One Piece',  episodes: 1140 },
  { title: 'One Punch Man',  episodes: 24 },
  { title: 'Death Note',  episodes: 37 },
  { title: 'Cowboy Bebop',  episodes: 26 },
  { title: 'Tengen Toppa Gurren Lagann',  episodes: 27 },
  { title: 'GTO',  episodes: 43 },
  { title: 'Samurai Champloo',  episodes: 26 },
  { title: 'Afro Samurai',  episodes: 5 },
  { title: 'Black Lagoon',  episodes: 29 },
  { title: 'Claymore',  episodes: 26 },
  { title: 'Hellsing',  episodes: 13 },
  { title: 'Beck',  episodes: 26 },
].map(show => {
  const episodeIds = new Array(show.episodes)
    .fill(0)
    .map(() => episodeId++);
  const { episodes, ...cleanedShow } = show;
  return {
    id: showId++,
    ...cleanedShow,
    episodeIds
  }
});


// EPISODES
const totalNumberOfEpisodes: number = shows
  .map(show => show.episodeIds.length)
  .reduce((current, next) => current + next);

const episodes: Episode[] = new Array(totalNumberOfEpisodes);
shows.forEach(show => {
  const newEpisodes = show.episodeIds.map(eId => {
    return {
      id: eId,
      showId: show.id,
      title: "Placeholder",
    }
  });

  episodes.push(...newEpisodes);
});


// USERS
const users: User[] = [
  { username: 'unknown', watchedIds: [] },
  { username: 'nick', watchedIds: [] }, // { userId: 1, showId: 1, episodeId: 12 }, { showId: 2, episodesWatched: 21 }
].map(user => {
  return {
    id: userId++,
    ...user
  }
});


// WATCHED
const watcheds: Watched[] = []; // { userId: 1, showId: 1, episodeId: 12 }
for (let index = 0; index < 50; index++) {
  const sId = Math.floor(Math.random() * shows.length);
  const eIds = shows.find(s => s.id == sId)?.episodeIds as number[];
  const episodeId = eIds[Math.floor(Math.random() * eIds.length)];
  watcheds.push({
    id: watchedId++,
    userId: 1, 
    showId: sId, 
    episodeId, 
  })
}

watcheds.forEach(watched => {
  const user: User = users.find(user => user.id == watched.userId) as User;
  user.watchedIds.push(watched.id);
});

export { shows, episodes, users, watcheds };
