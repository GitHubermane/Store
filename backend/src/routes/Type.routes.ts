import { Router } from "express";
import { TypeController } from "../controller/Type.controller";
import { CheckRoleMiddleware } from "../middleware/CheckRoleMiddleware";

const router = Router()

router.post('/', CheckRoleMiddleware('ADMIN'), TypeController.create)
router.get('/', TypeController.getAll)

export default router