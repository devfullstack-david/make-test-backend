import { Response, NextFunction } from 'express';
import { AuthService } from '../services/auth-service';

const authService = new AuthService();

export function authMiddleware(req: any, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ error: 'Token não fornecido' });
    return;
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = new AuthService().verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token inválido' });
    return;
  }
}

