import type { Watched } from "./Watched.type";

export type User = {
  id: number,
  username: string,
  watcheds: Watched[],
}
