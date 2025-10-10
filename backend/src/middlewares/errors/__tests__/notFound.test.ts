import { Request, Response } from 'express';
import { notFoundMiddleware } from '../notFound';

describe('notFoundMiddleware', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockNext: jest.Mock;

    beforeEach(() => {
        mockRequest = {};
        mockResponse = {};
        mockNext = jest.fn();
    });

    it('should call next with a 404 NotFound error', () => {
        notFoundMiddleware(
            mockRequest as Request,
            mockResponse as Response,
            mockNext
        );

        expect(mockNext).toHaveBeenCalledTimes(1);

        const error = mockNext.mock.calls[0][0];
        expect(error).toBeDefined();
        expect(error.status).toBe(404);
        expect(error.message).toBe('Not Found');
    });

    it('should not send a response directly', () => {
        const sendMock = jest.fn();
        const jsonMock = jest.fn();
        mockResponse.send = sendMock;
        mockResponse.json = jsonMock;

        notFoundMiddleware(
            mockRequest as Request,
            mockResponse as Response,
            mockNext
        );

        expect(sendMock).not.toHaveBeenCalled();
        expect(jsonMock).not.toHaveBeenCalled();
    });
});

