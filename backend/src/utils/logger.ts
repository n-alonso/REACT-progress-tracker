import winston from 'winston';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

// Define log format for production (JSON for external services)
const productionFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
);

// Define log format for development (human-readable)
const developmentFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.colorize(),
    winston.format.printf(({ timestamp, level, message, context, ...meta }) => {
        const contextStr = context ? `[${context}]` : '';
        const metaStr = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '';
        return `${timestamp} ${level} ${contextStr} ${message}${metaStr}`;
    })
);

// Create transports
const transports: winston.transport[] = [
    new winston.transports.Console(),
];

// Add file transports for production
if (isProduction) {
    transports.push(
        new winston.transports.File({
            filename: path.join('logs', 'error.log'),
            level: 'error',
            maxsize: 5242880, // 5MB
            maxFiles: 5,
        }),
        new winston.transports.File({
            filename: path.join('logs', 'combined.log'),
            maxsize: 5242880, // 5MB
            maxFiles: 5,
        })
    );
}

// Create logger instance
export const logger = winston.createLogger({
    level: isDevelopment ? 'debug' : 'info',
    format: isProduction ? productionFormat : developmentFormat,
    transports,
    silent: process.env.NODE_ENV === 'test',
});

// Export utility functions with context
export const createLogger = (context: string) => ({
    info: (message: string, meta?: Record<string, any>) =>
        logger.info(message, { context, ...meta }),
    error: (message: string, error?: Error | Record<string, any>) =>
        logger.error(message, { context, ...(error instanceof Error ? { error: error.message, stack: error.stack } : error) }),
    warn: (message: string, meta?: Record<string, any>) =>
        logger.warn(message, { context, ...meta }),
    debug: (message: string, meta?: Record<string, any>) =>
        logger.debug(message, { context, ...meta }),
});

