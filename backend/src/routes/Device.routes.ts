import { Router } from "express";
import { DeviceController } from "../controller/Device.controller";
import { CheckRoleMiddleware } from "../middleware/CheckRoleMiddleware";

const router = Router()

router.post('/', CheckRoleMiddleware('ADMIN'), DeviceController.create)
router.get('/', DeviceController.getAll)
router.get('/:id', DeviceController.getOne)
router.delete('/deleteAll', CheckRoleMiddleware('ADMIN'), DeviceController.deleteAll)

export default router