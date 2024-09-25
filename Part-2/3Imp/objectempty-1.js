//how to verify object is empty or not?
let user={
    uname:"Rahul",
    uloc:"Wayanad",
    avail:true,
    email:"rg@gmail.com"
}
console.log(user.uname)
console.log(user.length) //undefined
console.log(Object.keys(user)) // ['uname',....]
console.log(Object.keys(user).length) //4
console.log(Object.keys(user).length>0) //true