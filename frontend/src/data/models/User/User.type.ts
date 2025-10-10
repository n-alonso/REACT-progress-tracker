import type { WatchedEpisode } from "../WatchedEpisode/WatchedEpisode.type";

export type User = {
  id: number,
  username: string,
  watchedEpisodes: WatchedEpisode[],
}
