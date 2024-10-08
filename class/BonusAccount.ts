import { DioAccount } from "./DioAccount"


export class BonusAccount extends DioAccount{

  specialDeposit = (value: number): void =>{
   this.deposit(value + 10)
  }
}