

// Banco em TypeScript

//document, name , age, email, accountNumber
//deposit, sacar

import {PeopleAccount} from "./class/PeopleAccount";
import {CompanyAccount } from "./class/CompanyAccount";


const peopleAccount: PeopleAccount = new PeopleAccount(1, "Yann", 1)
peopleAccount.deposit(10)


