class Account{
    min_Bal=500
    open_Account(){
        console.log("Account Opened Successfully!")
    }
    deposit_Amount(){
        console.log("Amount Deposited Successfully")
    }
    get_Bal(){
        console.log("Getting Account Balance")
    }
}
let a1=new Account()
a1.open_Account()
a1.deposit_Amount()
a1.get_Bal()
let a2=new Account()
a2.open_Account()
a2.deposit_Amount()
a2.get_Bal()
//How to access class members-using object