import { NextFunction, Request, Response } from 'express'
import { Models } from '../models/models'
import { v4 } from 'uuid'
import path from 'path'
import { ApiError } from '../error/ApiError'
import { UploadedFile } from 'express-fileupload'
import { ParsedUrlQuery } from 'querystring'
import { Model } from 'sequelize/types'

type DeviceInfoType = {
    id: number
    title: string
    describe: string
}
type DeviceType = {
    id: number
    brandId: number
    typeId: number
    name: string
    price: number
    img: string
    rating: number
}
export const DeviceController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            let { brandId, typeId, name, price, info } = req.body
            if (!req.files) {
                return res.json({ message: 'File is required' })
            }
            const img = req.files.img as UploadedFile
            let filename = v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', filename))
            const device: any = await Models.Device.create({ brandId, typeId, name, price, img: filename })
            if (info) {
                info = JSON.parse(info)
                info.forEach((i: DeviceInfoType) => {
                    Models.DeviceInfo.create({
                        id: device.id,
                        title: i.title,
                        describe: i.describe
                    })
                });
            }
            return res.json(device)
        } catch (error: any) {
            next(ApiError.badRequest(error.message))

        }


    },
    async getAll(req: Request, res: Response) {
        try {
            let { brandId, typeId } = req.query
            let limit = Number(req.query.limit) || 18
            let page = Number(req.query.page) || 1
            let offset = page * limit - limit
            let devices
            if (!brandId && !typeId) devices = await Models.Device.findAndCountAll({ limit, offset })
            if (brandId && !typeId) devices = await Models.Device.findAndCountAll({ where: { brandId }, limit, offset })
            if (!brandId && typeId) devices = await Models.Device.findAndCountAll({ where: { typeId }, limit, offset })
            if (brandId && typeId) devices = await Models.Device.findAndCountAll({ where: { brandId, typeId }, limit, offset })

            return res.json(devices)
        } catch (error: any) {
            return res.json(error.message)
        }
    },
    async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params
            const device = await Models.Device.findOne({
                where: { id },
                include: [{ model: Models.DeviceInfo, as: 'info' }]
            })
            return res.json(device)
        } catch (error: any) {
            return res.json(error.message)
        }
    },
    async deleteAll(req: Request, res: Response) {
        try {
            const devices = await Models.Device.destroy({
                cascade: true,
                truncate: true,
                force: true
            })
            return res.json({ message: "All devices deleted" })

        } catch (error) {
            return res.json(error)
        }
    },
}

