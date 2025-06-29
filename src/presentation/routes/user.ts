import { Router } from "express";
import { LoginController } from "../controllers/user/login";

const router = Router();

router.post('/login', (req, res) => new LoginController().handle(req, res));

export default router;