//how to verify object is empty or not?
let user={
    uname:"Rahul",
    uloc:"Wayanad",
    avail:true,
    email:"rg@gmail.com"
}
if(Object.keys(user).length>0){
        console.log("Not Empty Object")
}
else{
    console.log("Empty Object")
}