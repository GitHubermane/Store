import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const AuthMiddleware = (req: any, res: Response, next: NextFunction) => {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if (!token) {
            return res.status(401).json({ message: 'Необходимо авторизироваться' })
        }
        const decoded = jwt.verify(token, String(process.env.SECRET_KEY))
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({ message: 'Необходимо авторизироваться' })
    }
}