import { Router } from "express";
import { AppController } from "../controller/App.controller";

const router = Router()

router.get('/hh', AppController.getAll)

export default router