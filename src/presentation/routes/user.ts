import { Router } from "express";
import { LoginController } from "../controllers/user/login";
import { RegisterController } from "../controllers/user/register";

const router = Router();

router.post('/login', (req, res) => new LoginController().handle(req, res));
router.post('/register', (req, res) => new RegisterController().handle(req, res));

export default router;