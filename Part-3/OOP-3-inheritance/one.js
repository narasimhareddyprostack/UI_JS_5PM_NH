class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id,name,bal) {
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=bal;
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal+amount;
    }
    withdrawl(amount){
        this.acc_Bal = this.acc_Bal - amount;
    }
    get_Bal(){
        return this.acc_Bal - 500;
    }
}

let a1 = new Account(101,"Rahul",5000)
a1.deposit_Amount(15000)
a1.deposit_Amount(15)
a1.withdrawl(50)

let a2= new Account(102,"Sonia",15000)
a2.withdrawl(14)

let a3= new Account(103,"Priyanka",55000)
a3.withdrawl(55);

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a1.get_Bal())
console.log(a2.get_Bal())
console.log(a3.get_Bal())