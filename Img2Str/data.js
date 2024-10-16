var imgStr;
let convertToStr = async()=>{
    let file1 = document.getElementById('abc').files[0];
    let reader  = new FileReader();
    await reader.readAsDataURL(file1);
    console.log("TestCase 123")
    reader.addEventListener("load",(resp)=>{
        console.log("Test Case 124")
        console.log(resp)
        console.log(resp.target.result)
        imgStr  = resp.target.result;
    document.getElementById('imgStr').innerHTML=resp.target.result
    })
}
function convertStr2Img(){
    //alert("Test Case")
    document.getElementsByTagName('img')[0].src=imgStr;
}