
import {DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number) : void =>{
      console.log("Your Company make a Loan!!")
      this.withdraw(this.balance - value)

  }
}
