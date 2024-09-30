function changeColor1(){
    //document.getElementById('abc').innerHTML="Test"
    document.getElementById('abc').style.backgroundColor="green"
    //alert("Test Case123")
}
function changeColor2(){
    let btnRef = document.getElementsByTagName('button')[1]
    console.log(btnRef)
    btnRef.style.backgroundColor="green"
}
function changeColor3(){
    /* let ref= document.querySelector('#btn4')
    console.log(ref) */
    document.querySelector('#btn4').style.backgroundColor="yellow"
}
/* function changeColor4(){
    //alert("Test Case123")
    document.querySelector('.btn3').style.backgroundColor="yellow"
} */

    function changeColor4(){
        //alert("Test Case123")
        document.getElementsByClassName('btn3')[0].style.backgroundColor="yellow"
    }