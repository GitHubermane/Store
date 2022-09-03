import { Models } from "../models/models"

class BrandService {
    async create(brand: { name: string }) {
        const createdBrand = await Models.Brand.create(brand)
        return createdBrand
    }

    async getAll() {
        const brands = await Models.Brand.findAll()
        return brands
    }
}

export default new BrandService()