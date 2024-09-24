function cal_Age(dob_year){
    let current_year=new Date().getFullYear();
    
    return current_year-dob_year
}

let age1 = cal_Age(1983)
let age2 = cal_Age(2002)
console.log(age1) //41
console.log(age2) //22