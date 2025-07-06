export type UserProps = {
    email: string;
    name: string;
    lastName: string;
    company?: string;
    birthday: Date;
    password: string;
    confirmPassword: string;
};

export class User {
    private email: string;
    private name: string;
    private lastName: string;
    private company?: string;
    private birthday: Date;
    private password: string;
    private confirmPassowrd: string;
    
    constructor(props: UserProps) {
        this.validate(props);

        this.email = props.email;
        this.name = props.name;
        this.lastName = props.lastName;
        this.company = props.company;
        this.birthday = props.birthday;
        this.password = props.password;
        this.confirmPassowrd = props.password;
    }

    validate(props: UserProps) {
        const currentDate = new Date();

        if (props.password.length < 8) {
            throw new Error('A senha deve ter mais de 8 caracteres');
        }
        
        if (props.password != props.confirmPassword) {
            throw new Error('A confirmação de senha deve ser igual a senha');
        }

        if (props.birthday >= currentDate) {
            throw new Error('A data de aniversário não pode ser igual ou maior que hoje');
        }
    }

    set setPassword(password: string) {
        this.password = password;
    }

    get getEmail(): string {
        return this.email;
    }

    get getName(): string {
        return this.name;
    }

    get getLastName(): string {
        return this.lastName;
    }

    get getCompany(): string | undefined {
        return this.company;
    }

    get getBirthday(): Date {
        return this.birthday;
    }

    get getPassword(): string {
        return this.password;
    }

}