import { Router } from "express";
import { CartController } from "./Cart.controller";

const router = Router()

router.get('/', CartController.getCart)
router.post('/:id', CartController.addToCart)
router.put('/:id', CartController.changeQuantity)
router.delete('/:id', CartController.deleteOne)

export default router