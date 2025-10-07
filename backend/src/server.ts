import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { errorHandlerMiddleware, notFoundMiddleware } from './middlwares';
import { healthRoute } from './routes/health';
import { showRoute, usersRoute } from './routes';
import { watchedsRoute } from './routes/watcheds';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
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
