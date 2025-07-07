import { IAuthService } from "../../domain/interfaces/auth-service";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'defaultsecret';

export class AuthService implements IAuthService {
    private readonly saltRounds = 10;

    async encryptPassword(password: string): Promise<string> {
        const salt =  await bcrypt.genSalt(this.saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        return hashedPassword;
    }

    async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }

    generateToken(payload: object): string {
        return jwt.sign(payload, secret, { expiresIn: '1d' })
    }

    verifyToken(token: string) {
        try {
            return jwt.verify(token, secret);
        } catch (error) {
            throw new Error('Token inválido ou expirado');
        }
    }
}