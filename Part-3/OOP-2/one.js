class Account{
        acc_Bal=0;
        min_Bal=500;
        deposit_Amount(amount){
            this.acc_Bal = this.acc_Bal +amount
        }
}
let a1=new Account();
let a2=new Account();
console.log(a1)
console.log(a2)

a1.deposit_Amount(50)
a2.deposit_Amount(501)
a2.deposit_Amount(10)
console.log(a1)
console.log(a2)