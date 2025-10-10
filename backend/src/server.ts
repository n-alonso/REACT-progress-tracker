import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import { errorHandlerMiddleware, notFoundMiddleware } from './middlewares';
import { healthRouter, showsRouter, usersRouter, watchedEpisodesRouter } from './features';
import { createLogger } from './utils/logger';

const logger = createLogger('Server');
const app = express();

// Validate Environment Variables
if (!process.env.DATABASE_URL || !process.env.FRONTEND_URL) {
    logger.error("ERROR: 'DATABASE_URL | FRONTEND_URL' environment variable is not set");
    process.exit(1);
}

// Middlewares
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(express.json());
if (process.env.NODE_ENV !== 'test')
    app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Routes
app.use('/health', healthRouter);
app.use('/shows', showsRouter);
app.use('/users', usersRouter);
app.use('/watchedEpisodes', watchedEpisodesRouter);

// Error Handling
app.use('*', notFoundMiddleware);
app.use(errorHandlerMiddleware);

export { app };

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => logger.info(`Server listening on http://localhost:${PORT}`, { port: PORT }));
}
