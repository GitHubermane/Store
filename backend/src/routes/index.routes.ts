import { Router } from "express";
import UserRouter from "../User/User.routes"
import CartRouter from "../Cart/Cart.routes";
import DeviceRouter from "../Device/Device.routes";
import OrderRouter from "../Order/Order.routes";
import TypeRouter from "../Type/Type.routes";
import BrandRouter from "../Brand/Brand.routes";

const router = Router()

router.use('/user', UserRouter)
router.use('/cart', CartRouter)
router.use('/device', DeviceRouter)
router.use('/order', OrderRouter)
router.use('/type', TypeRouter)
router.use('/brand', BrandRouter)


export default router