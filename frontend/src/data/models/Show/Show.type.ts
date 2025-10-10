import type { Episode } from "../Episode/Episode.type";

export type Show = {
  id: number,
  title: string,
  episodes: Episode[],
}
