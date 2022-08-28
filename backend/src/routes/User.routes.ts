import { Router } from "express";
import { UserController } from "../controller/User.controller";
import { AuthMiddleware } from "../middleware/AuthMiddleware";

const router = Router()

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', AuthMiddleware, UserController.auth)

export default router