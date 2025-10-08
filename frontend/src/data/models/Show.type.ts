import type { Episode } from "./Episode.type";

export type Show = {
  id: number,
  title: string,
  episodes: Episode[],
}
