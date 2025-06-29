export type ILoginParams = {
    email: string;
    password: string;
};

export interface ILogin {
    login(user: ILoginParams): Promise<boolean>;
}