import { Router } from "express";
import { BrandController } from "../controller/Brand.controller";
import { CheckRoleMiddleware } from "../middleware/CheckRoleMiddleware";

const router = Router()

router.post('/', CheckRoleMiddleware('ADMIN'), BrandController.create)
router.get('/', BrandController.getAll)

export default router