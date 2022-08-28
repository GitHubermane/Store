import { NextFunction, Request, Response } from "express"
import { ApiError, ApiErrorType } from "../error/ApiError"

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) res.status(err.status).json({ message: err.message })
    return res.status(500).json({message: 'Ошибка'})
}