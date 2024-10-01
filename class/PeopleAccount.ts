import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount{
  document : number

  constructor(documentId: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.document = documentId
  }
}

