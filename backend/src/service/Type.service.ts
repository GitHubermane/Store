import { Models } from "../models/models"

class TypeService {
    async create(type: { name: string }) {
        const createdType = await Models.Type.create(type)
        return createdType

    }

    async getAll() {
        const types = await Models.Type.findAll()
        return types
    }
}

export default new TypeService()