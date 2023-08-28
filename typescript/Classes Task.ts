class Account {
  constructor(public accNum: number,public balance: number) { }
  debitAmount():void{
    console.log(this.accNum);
    
  }
  creditAmount():void{
    console.log(this.accNum);
    
  }
  getBalance():void{
    console.log(this.balance);
    
  }
}
interface IAccount {
  dataOfOpening: number;
  addCustomer:() => string;
  removeCustomer: () => string;
}

class CurrentAccount extends Account implements IAccount {
  interestRate: number;
  dataOfOpening: number;
  addCustomer: () => string;
  removeCustomer: () => string;
  constructor(interestRate: number,accNum: number,balance: number){
    super(accNum,balance);
    this.interestRate = interestRate;
  }
}

class SavingAccount extends Account implements IAccount {
  minBalance: number;
  dataOfOpening: number;
  addCustomer: () => string;
  removeCustomer: () => string;
  constructor(minBalance: number,accNum: number,balance: number) {
    super(accNum,balance);
    this.minBalance = minBalance;
  }
}
