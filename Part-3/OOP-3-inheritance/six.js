class Account{
    acc_Name;
    acc_Email;
}
class SA extends Account{
    acc_Id;
    acc_Bal;
    constructor(id,name,bal,email){
        super();
        this.acc_Id=id
        this.acc_Bal=bal;
    }
}
let sa1=new SA(101,"Rahul",5000,'rahul@gmail.com')
console.log(sa1)