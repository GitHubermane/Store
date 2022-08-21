import { Router } from "express";
import { BrandController } from "../controller/Brand.controller";

const router = Router()

router.post('/', BrandController.create)
router.get('/', BrandController.getAll)

export default router