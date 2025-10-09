import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { errorHandlerMiddleware } from '../errorHandler';

describe('errorHandlerMiddleware', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockNext: NextFunction;
    let jsonMock: jest.Mock;
    let statusMock: jest.Mock;

    beforeEach(() => {
        mockRequest = {};
        jsonMock = jest.fn();
        statusMock = jest.fn().mockReturnValue({ json: jsonMock });
        mockResponse = {
            status: statusMock,
        };
        mockNext = jest.fn();
    });

    it('should handle http-errors with status and message', () => {
        const error = createError.NotFound('Resource not found');

        errorHandlerMiddleware(
            error,
            mockRequest as Request,
            mockResponse as Response,
            mockNext
        );

        expect(statusMock).toHaveBeenCalledWith(404);
        expect(jsonMock).toHaveBeenCalledWith({
            status: 404,
            message: 'Resource not found',
        });
    });

    it('should handle BadRequest errors', () => {
        const error = createError.BadRequest('Invalid input');

        errorHandlerMiddleware(
            error,
            mockRequest as Request,
            mockResponse as Response,
            mockNext
        );

        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({
            status: 400,
            message: 'Invalid input',
        });
    });

    it('should handle InternalServerError', () => {
        const error = createError.InternalServerError('Something went wrong');

        errorHandlerMiddleware(
            error,
            mockRequest as Request,
            mockResponse as Response,
            mockNext
        );

        expect(statusMock).toHaveBeenCalledWith(500);
        expect(jsonMock).toHaveBeenCalledWith({
            status: 500,
            message: 'Something went wrong',
        });
    });

    it('should default to 500 for errors without status', () => {
        const error = new Error('Generic error');

        errorHandlerMiddleware(
            error,
            mockRequest as Request,
            mockResponse as Response,
            mockNext
        );

        expect(statusMock).toHaveBeenCalledWith(500);
        expect(jsonMock).toHaveBeenCalledWith({
            status: 500,
            message: 'Generic error',
        });
    });

    it('should handle errors with statusCode property', () => {
        const error: any = new Error('Error with statusCode');
        error.statusCode = 403;

        errorHandlerMiddleware(
            error,
            mockRequest as Request,
            mockResponse as Response,
            mockNext
        );

        expect(statusMock).toHaveBeenCalledWith(403);
        expect(jsonMock).toHaveBeenCalledWith({
            status: 403,
            message: 'Error with statusCode',
        });
    });

    it('should default message to "Internal Server Error" when no message provided', () => {
        const error: any = { status: 500 };

        errorHandlerMiddleware(
            error,
            mockRequest as Request,
            mockResponse as Response,
            mockNext
        );

        expect(statusMock).toHaveBeenCalledWith(500);
        expect(jsonMock).toHaveBeenCalledWith({
            status: 500,
            message: 'Internal Server Error',
        });
    });
});

