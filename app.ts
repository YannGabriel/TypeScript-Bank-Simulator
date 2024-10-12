

// Banco em TypeScript

//document, name , age, email, accountNumber
//deposit, sacar

import {PeopleAccount} from "./class/PeopleAccount";
import {CompanyAccount } from "./class/CompanyAccount";
import {BonusAccount } from "./class/BonusAccount";


const peopleAccount: PeopleAccount = new PeopleAccount(1, "Yann", 1)
peopleAccount.getBalance()
peopleAccount.deposit(10)
peopleAccount.getBalance()
peopleAccount.deposit(5000)
peopleAccount.getBalance()

const companyAccount : CompanyAccount = new CompanyAccount ("Xp", 1)
companyAccount.getLoan(200)
companyAccount.getBalance()

const bonusAccount: BonusAccount = new BonusAccount("Yann", 1)
bonusAccount.specialDeposit(100)