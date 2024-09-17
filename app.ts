

// Banco em TypeScript

//document, name , age, email, accountNumber
//deposit, sacar

abstract class Account {
  name: string
  accountNumber: number
  balance:number = 0

  constructor(name: string,
    accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
   }

   deposit = (value:number) => {
    console.log(`you deposit ${value}`)
   }

   withdraw = () =>{
    console.log("withdraw")
   }

   getBalance =() =>{
    console.log(this.balance)
   }
}

class Adimin extends Account{
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
}

class PeopleAccount extends Account{
  document : number

  constructor(documentId: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.document = documentId
  }
}

class CompanyAccount extends Account{

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
}

const PA1: PeopleAccount = new PeopleAccount(198291, "Yann", 1)
console.log(PA1)



