import { ExpressProps } from "../types";

export function healthRoute({ req, res }: ExpressProps): void {
    res.json({ status: 'ok' });
};
