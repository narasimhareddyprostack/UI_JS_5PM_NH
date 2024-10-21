class Account{
    acc_Name;
    acc_Email;
    constructor(name,email){
        this.acc_Name=name;
        this.acc_Email=email
    }
    open_Account(){
        console.log("Account Opened Successfully!")
    }

}
class SA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=500;
    constructor(id,name,email,amount){
        super(name,email);
        this.acc_Id=id;
        this.acc_Bal=amount
    }
    deposit_Amount(amount){}
    withdrawl_Amount(amount){}
    get_Bal(){
        return 0
    }
}
let sa1=new SA(101,"Rahul","rg@pm.com",5001);
sa1.deposit_Amount(50)
sa1.deposit_Amount(50)
sa1.withdrawl_Amount(15)
console.log(sa1.get_Bal())
let sa2=new SA(102,"Sonai","sg@gmail.com",15001);
console.log(sa2.get_Bal())
let sa3=new SA(103,"Priyanka","pg@gmail.com",50001);
sa3.withdrawl_Amount(5000)
console.log(sa3.get_Bal())