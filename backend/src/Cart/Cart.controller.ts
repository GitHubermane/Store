import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../error/ApiError'
import CartService from './Cart.service'

export const CartController = {
    async getCart(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.cookies
            const cart = await CartService.getCart(refreshToken)

            return res.json(cart)
        } catch (error: any) {
            next(ApiError.badRequest(error.message))
        }
    },

    async addOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.cookies
            const { deviceId } = req.body
            const device = await CartService.addOne(refreshToken, deviceId)

            return res.json(device)
        } catch (error: any) {
            next(ApiError.badRequest(error.message))
        }
    },

    async changeQuantity(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.cookies
            const { deviceId, quantity } = req.body
            const device = await CartService.changeQuantity(refreshToken, deviceId, quantity)

            return res.json(device)
        } catch (error: any) {
            next(ApiError.badRequest(error.message))
        }
    },

    async deleteOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.cookies
            const { deviceId } = req.body
            const device = await CartService.deleteOne(refreshToken, deviceId)

            return res.json(device)
        } catch (error: any) {
            next(ApiError.badRequest(error.message))
        }
    }
}

