class Account{
    min_Bal=500;
    open_Account(){
        console.log("Account Opened Successfully");
    }
    deposit_Amount(amount){
        console.log(amount,"-Deposited")
    }
    withdrawl_Amount(amount){
        console.log(amount,"- Withdrawl successfully")
    }
    get_Bal(){
        console.log("Server Down")
    }
}
let a1 = new Account()
console.log(a1)
a1.open_Account()
a1.deposit_Amount(500)
a1.deposit_Amount(100)
a1.get_Bal()
let a2 = new Account()
console.log(a2)
a2.open_Account()
a2.deposit_Amount(100)
a2.deposit_Amount(1000)
a2.get_Bal()