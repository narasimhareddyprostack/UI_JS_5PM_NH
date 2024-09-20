let emp = {
    eid:101,
    ename:"Rahul Gandhi",
    esal:45000
}
/* console.log(emp.eid)
console.log(emp.ename)
console.log(emp.esal) */

for(prop in emp){
    console.log(emp[prop])
}