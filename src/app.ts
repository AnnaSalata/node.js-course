import express from 'express';
import { logger } from './utils/logger';
import { config } from './config';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req: any, res: any, next: (arg?: any) => void) => {
    res.header('Content-Type', 'application/json');
    next();
});

app.get("/", (req, res) => {
    Promise.reject(new Error('Error'));
    logger.error({
        url: req.url,
        params: req.params,
        message: 'GET request',
    });

    res.send(JSON.stringify({ body: 'Response' }));
});

app.post("/", (req, res) => {
    logger.info({
        url: req.url,
        params: req.params,
        message: "POST request",
    });

    const body = req.body;
    res.send(body);
});

app.listen(config.APP_PORT, () => {
    logger.info(`Server is listening on port ${config.APP_PORT}. Env is ${config.ENV}`);
});

process.on('uncaughtException', (err, origin) => {
    logger.error({ message: 'Uncaught exception', origin });
});

process.on('unhandledRejection', (reason, promise) => {
    logger.error({ message: 'Unhandled rejection', promise });
});
