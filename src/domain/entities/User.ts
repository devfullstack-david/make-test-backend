export type UserProps = {
    email: string;
    name: string;
    lastName: string;
    company?: string;
    birthday: Date;
};

export class User {
    private readonly email: string;
    private readonly name: string;
    private readonly lastName: string;
    private readonly company?: string;
    private readonly birthday: Date;
    
    constructor(props: UserProps) {
        this.email = props.email;
        this.name = props.name;
        this.lastName = props.lastName;
        this.company = props.company;
        this.birthday = props.birthday;
    }
}