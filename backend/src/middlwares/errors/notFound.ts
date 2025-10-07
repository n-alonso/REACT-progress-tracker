import createError from "http-errors";
import { ExpressProps } from "../../types";

export function notFoundMiddleware({ req, res, next }: ExpressProps): void {
    next(createError.NotFound());
}
