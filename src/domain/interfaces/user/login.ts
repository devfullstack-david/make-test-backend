import { UserDatabase } from "./database";

export type ILoginParams = {
    email: string;
    password: string;
};

export interface ILogin {
    login(user: ILoginParams): Promise<UserDatabase | null>;
}