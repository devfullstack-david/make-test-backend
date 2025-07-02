import { IAuthService } from "../../domain/interfaces/auth-service";
import bcrypt from 'bcrypt';

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
}