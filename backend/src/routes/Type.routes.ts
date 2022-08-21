import { Router } from "express";
import { TypeController } from "../controller/Type.controller";

const router = Router()

router.post('/', TypeController.create)
router.get('/', TypeController.getAll)

export default router