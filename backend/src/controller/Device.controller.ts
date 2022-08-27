import { Request, Response } from 'express'
import { Models } from '../models/models'
import { v4 } from 'uuid'
import path from 'path'
import { nextType } from '../middleware/ErrorHandleMiddleware'
import { ApiError } from '../error/ApiError'
import { UploadedFile } from 'express-fileupload'

export const DeviceController = {
    async create(req: Request, res: Response, next: nextType) {
        try {
            const { brandId, typeId, name, price } = req.body
            if (!req.files) {
                return res.json({ message: 'File is required' })
            }
            const img = req.files.img as UploadedFile
            let filename = v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', filename))
            const device = await Models.Device.create({ brandId, typeId, name, price, img: filename })
            return res.json(device)
        } catch (error: any) {
            next(ApiError.badRequest(error.message))

        }


    },
    async getAll(req: Request, res: Response) {
        let devices = await Models.Device.findAll()
        let { brandId, typeId } = req.query
        if (!brandId && !typeId) devices = await Models.Device.findAll()
        if (brandId && !typeId) devices = await Models.Device.findAll({ where: { brandId }})
        if (!brandId && typeId) devices = await Models.Device.findAll({ where: { typeId } })
        if (brandId && typeId) devices = await Models.Device.findAll({ where: { brandId, typeId } })
        
        return res.json(devices)
    },
    async getOne(req: Request, res: Response) {
        const { id } = req.params
        const device = await Models.Device.findOne({
            where: { id }
        })
        return res.json(device)
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

