

export abstract class DioAccount {
  private name: string
  readonly accountNumber: number
  private balance:number = 0
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
    }
   }

   withdraw = (): void =>{
    console.log("withdraw")
   }

   getBalance =(): void =>{
    console.log(this.balance)
   }

   private validateStatus = (): boolean => {
    if (this.status){
      return this.status
    }

    throw new Error("Conta inválida, tente novamente")
   }
}
