import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { decode } from "punycode";
import { roleType } from "../controller/User.controller";


//   Убрать в отдельный файл с типами
declare module "jsonwebtoken" {
    export interface JwtPayload {
        role: string;
    }
}

export const CheckRoleMiddleware = (role: roleType) => {
    return (req: any, res: Response, next: NextFunction) => {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if (!token) {
            return res.status(401).json({ message: 'Необходимо авторизироваться' })
        }
        const decoded = jwt.verify(token, String(process.env.SECRET_KEY)) as JwtPayload
        if (decoded.role !== role ){
            return res.status(403).json({message: 'Нет доступа'})
        }
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({ message: 'Необходимо авторизироваться' })
    }
}}