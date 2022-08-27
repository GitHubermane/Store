import { Request, Response } from "express"
import { ApiError, ApiErrorType } from "../error/ApiError"

export type nextType = (func?: ApiErrorType) => void | Promise<void>

export const errorHandler = (err: any, req: Request, res: Response, next: nextType) => {
    if (err instanceof ApiError) res.status(err.status).json({ message: "Error" })
}