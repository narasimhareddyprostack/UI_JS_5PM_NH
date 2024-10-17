class Account{
    acc_Bal=0
    min_Bal=500

    deposit_Amount(amount){
        this.acc_Bal  = this.acc_Bal+amount
    }
    get_Bal(){
        console.log("Your Bal:", this.acc_Bal-this.min_Bal)
    }
}
let a1 = new Account()
a1.deposit_Amount(5000)
a1.deposit_Amount(50)
let a2=new Account()
a2.deposit_Amount(10)
a1.get_Bal()
a2.get_Bal()