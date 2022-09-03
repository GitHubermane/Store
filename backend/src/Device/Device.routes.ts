import { Router } from "express";
import { DeviceController } from "./Device.controller";
import { CheckRoleMiddleware } from "../middleware/CheckRoleMiddleware";

const router = Router()

router.post('/', DeviceController.create)
router.get('/', DeviceController.getAll)
router.get('/:id', DeviceController.getOne)
router.delete('/deleteAll', CheckRoleMiddleware('ADMIN'), DeviceController.deleteAll)
router.delete('/:id', CheckRoleMiddleware('ADMIN'), DeviceController.deleteOne)


export default router