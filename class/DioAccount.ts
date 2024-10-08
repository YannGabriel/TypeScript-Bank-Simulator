

export abstract class DioAccount {
  private name: string
  readonly accountNumber: number
  public balance:number = 0
  private status:boolean = true

  constructor(name: string,
    accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
   }

   public setName = (name:string): void =>{
    this.name = name
    console.log( 'New name saved')
   }

   public getName = (): string => {
    return this.name
   }

   deposit = (value:number) : void=> {
    if(this.validateStatus()){
    console.log(`You deposit ${value}`)
    this.balance = this.balance + value
    }
   }

   withdraw = (value: number): void =>{
    this.balance = value - this.balance
    console.log(this.withdraw)
   }

   getBalance =(): void =>{
    console.log(this.balance)
   }

  readonly validateStatus = (): boolean => {
    if (this.status){
      return this.status
    }

    throw new Error("Conta inválida, tente novamente")
   }
}
