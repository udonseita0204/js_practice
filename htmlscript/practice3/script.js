const button=document.getElementById("btn");
const countbutton=document.getElementById("countBtn");
const inputtext=document.getElementById("input");
const enterinput=document.getElementById("enterInput");
const multibtn=document.getElementById("multiBtn");
const message=document.getElementById("text");
const countmessage=document.getElementById("count");
const preview=document.getElementById("preview");
const enterresult=document.getElementById("enterResult");
//const consolemessage=document.getElementById("")

let  count=0;

button.addEventListener("click",(e)=>{
    e.preventDefault();

    message.textContent="押された"
});

countbutton.addEventListener("click",(e)=>{
    e.preventDefault();

    count++;
    countmessage.textContent=count;
});

inputtext.addEventListener("input",(e)=>{
    preview.textContent=e.target.value;
});

enterinput.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        enterresult.textContent="Enterが押されました"
    }
});

multibtn.addEventListener("click",(e)=>{
    console.log("ログ")
    alert("表示")
});