export class User {
    id!: number | null;
    firstName!: string | null;
    lastName!: string | null;
    phoneNumber!: number | null;
    mail!: string | null;
    dob!: Date | null;
    gender!: number | null;
    accountBalance!: number | null;

    constructor(id: number | null,
        firstName: string | null,
        lastName: string | null,
        phoneNumber: number | null,
        mail: string | null,
        dob: Date | null,
        gender: number | null,
        accountBalance: number | null) {

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.mail = mail;
        this.dob = dob;
        this.gender = gender;
        this.accountBalance = accountBalance;
    }
}