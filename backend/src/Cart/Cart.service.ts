import { Device } from "../Device/Device.model"
import { ApiError } from "../error/ApiError"
import TokenService from "../Token/Token.service"
import { Cart, CartDevice } from "./Cart.model"

const findCartNCartDeviceByToken = async (token: string, deviceId: string): Promise<{ cart: Cart, device: Device }> => {
    const userData = await TokenService.verifyRefreshToken(token)
    const cart = await Cart.findOne({ where: { userId: userData?.id } }) as Cart
    const device = await Device.findByPk(deviceId) as Device
    if (!device) throw ApiError.badRequest('Такого товара не существует')

    return {cart, device}
}

class CartService {
    async getCart(token: string) {
        const userData = await TokenService.verifyRefreshToken(token)
        const cart = await Cart.findOne({
            where: { userId: userData?.id },
            include: [{ model: CartDevice, as: 'devices' }]
        })

        return cart
    }

    async addToCart(token: string, id: string) {
        const { cart, device } = await findCartNCartDeviceByToken(token, id)
        const cartDevice = await CartDevice.create({
            cartId: cart?.id,
            deviceId: Number(id),
            quantity: 1,
            name: String(device?.name),
            price: Number(device?.price),
            img: String(device?.img)
        })

        return cartDevice
    }

    async changeQuantity(token: string, deviceId: string, quantity: string ) {
        const { cart, device } = await findCartNCartDeviceByToken(token, deviceId)
        const cartDevice = await CartDevice.findOne({where: {deviceId: device?.id, cartId: cart?.id}})
        cartDevice!.quantity = Number(quantity)
        await cartDevice?.save()

        return cartDevice
    }

    async deleteOne(token: string, deviceId: string) {
        const userData = await TokenService.verifyRefreshToken(token)
        const cart = await Cart.findOne({ where: { userId: userData?.id } })
        const cartDevice = await CartDevice.destroy({ where: { cartId: cart?.id, deviceId } })

        return cartDevice
    }

}

export default new CartService()