import { UploadedFile } from "express-fileupload"
import path from "path"
import fs from "fs"
import { v4 } from "uuid"
import { Models } from "../models/models"
type DeviceType = {
    id: number
    brandId: number
    typeId: number
    name: string
    price: number
    img: string
    rating: number
    info: any
}
type DeviceInfoType = {
    id: number
    title: string
    describe: string
}
class DeviceService {
    async create(device: DeviceType, file: UploadedFile) {

        let filename = v4() + '.jpg'
        file.mv(path.resolve(__dirname, '..', 'static', filename))
        const createdDevice: any = await Models.Device.create({ ...device, img: filename })
        if (device.info) {
            device.info = JSON.parse(device.info)
            device.info.forEach((i: DeviceInfoType) => {
                Models.DeviceInfo.create({
                    id: createdDevice.id,
                    title: i.title,
                    describe: i.describe
                })
            });
        }
        return createdDevice
    }

    async getAll(queryParams: qs.ParsedQs) {
        let { brandId, typeId } = queryParams
        let limit = Number(queryParams.limit) || 18
        let page = Number(queryParams.page) || 1
        let offset = page * limit - limit
        let devices
        if (!brandId && !typeId) devices = await Models.Device.findAndCountAll({ limit, offset })
        if (brandId && !typeId) devices = await Models.Device.findAndCountAll({ where: { brandId }, limit, offset })
        if (!brandId && typeId) devices = await Models.Device.findAndCountAll({ where: { typeId }, limit, offset })
        if (brandId && typeId) devices = await Models.Device.findAndCountAll({ where: { brandId, typeId }, limit, offset })
        return devices
    }

    async getOne(id: string) {
        const device = await Models.Device.findOne({
            where: { id },
            include: [{ model: Models.DeviceInfo, as: 'info' }]
        })
        return device
    }

    async deleteOne(id: string) {
        let device = await Models.Device.findOne({
            where: { id },
        }) as any
        fs.unlink(`${__dirname}/../static/${device?.img}`, err => {
            if (err) throw err})
        await Models.Device.destroy({
            where: { id },
        })
        return device
    }

    async deleteAll() {
        const devices = await Models.Device.destroy({
            cascade: true,
            truncate: true,
            force: true
        })
        const directory = `${__dirname}/../static/`

        fs.readdir(directory, (err, files) => {
            if (err) throw err;

            for (const file of files) {
                fs.unlink(path.join(directory, file), err => {
                    if (err) throw err;
                });
            }
        });
        return devices
    }
}

export default new DeviceService()