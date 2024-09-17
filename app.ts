

// Banco em TypeScript

//document, name , age, email, accountNumber
//deposit, sacar

abstract class Account {
  name: string
  age: number
  document: number
  accountNumber: number
  balance:number = 0

  constructor(name: string,
    age: number,
    document: number,
    accountNumber: number){
      this.name = name
      this.age = age
      this.document = document
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
  constructor(name: string, age: number, document: number, accountNumber: number){
    super(name, age, document, accountNumber)
  }
}

const Id1: Adimin = new Adimin("Yann", 19, 1098230, 19)
console.log(Id1)

const Id3: Account = new Account("Larissa", 18, 198291, 20)
console.log(Id3)


