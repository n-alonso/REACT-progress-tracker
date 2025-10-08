import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { errorHandlerMiddleware, notFoundMiddleware } from './middlewares';
import { healthRoute, showRoute, usersRoute, watchedsRoute } from './routes';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());

// Routes
app.get('/health', healthRoute);
app.use('/shows', showRoute);
app.use('/users', usersRoute);
app.use('/watcheds', watchedsRoute);

// Error Handling
app.use('*', notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
