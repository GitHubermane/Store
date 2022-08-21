import { Router } from "express";
import { UserController } from "../controller/User.controller";

const router = Router()

router.post('/registration',)
router.post('/login',)
router.get('/auth', UserController.auth)

export default router