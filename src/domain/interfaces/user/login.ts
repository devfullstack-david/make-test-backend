import { UserDatabase } from "./database";

export type ILoginParams = {
    email: string;
    password: string;
};

export type ILoginReturn = {
    existsUser: boolean;
    token: string;
}

export interface ILogin {
    login(user: ILoginParams): Promise<UserDatabase | null>;
}