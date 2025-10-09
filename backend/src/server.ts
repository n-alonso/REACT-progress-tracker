import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import { errorHandlerMiddleware, notFoundMiddleware } from './middlewares';
import { healthRouter, showsRouter, usersRouter, watchedsRouter } from './features';
import { createLogger } from './utils/logger';

const logger = createLogger('Server');
const app = express();

// Validate Environment Variables
if (!process.env.DATABASE_URL) {
    logger.error('ERROR: DATABASE_URL environment variable is not set');
    process.exit(1);
}

// Middlewares
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json());

// Routes
app.use('/health', healthRouter);
app.use('/shows', showsRouter);
app.use('/users', usersRouter);
app.use('/watcheds', watchedsRouter);

// Error Handling
app.use('*', notFoundMiddleware);
app.use(errorHandlerMiddleware);

export { app };

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => logger.info(`Server listening on http://localhost:${PORT}`, { port: PORT }));
}
