import { Router } from "express";
import UserRouter  from "./User.routes"
import DeviceRouter  from "./Device.routes";
import TypeRouter  from "./Type.routes";
import BrandRouter  from "./Brand.routes";

const router = Router()

router.use('/user', UserRouter)
router.use('/device', DeviceRouter)
router.use('/type', TypeRouter)
router.use('/brand', BrandRouter)


export default router