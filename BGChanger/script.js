let a = document.getElementsByClassName("container")[0];


const changeclr = () => {
    const rNum = Math.floor(Math.random() * 16777215);
    const rCode = "#" + rNum.toString(16);
    // console.log(rNum , rCode)
    document.body.style.backgroundColor = rCode;
}
a.addEventListener("click" , changeclr) 
changeclr();   