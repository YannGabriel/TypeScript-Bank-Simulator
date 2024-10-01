

export abstract class DioAccount {
  name: string
  accountNumber: number
  balance:number = 0

  constructor(name: string,
    accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
   }

   deposit = (value:number) : void=> {
    console.log(`you deposit ${value}`)
   }

   withdraw = (): void =>{
    console.log("withdraw")
   }

   getBalance =(): void =>{
    console.log(this.balance)
   }
}
