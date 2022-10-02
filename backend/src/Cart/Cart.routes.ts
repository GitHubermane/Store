import { Router } from "express";
import { CartController } from "./Cart.controller";

const router = Router()

router.get('/', CartController.getCart)
router.post('/', CartController.addOne)
router.put('/', CartController.changeQuantity)
router.delete('/', CartController.deleteOne)

export default router