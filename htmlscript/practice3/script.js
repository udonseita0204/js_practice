const button=document.getElementById("btn");
const countbutton=document.getElementById("countBtn");
const inputtext=document.getElementById("input");
const message=document.getElementById("text");
const countmessage=document.getElementById("count")
const preview=document.getElementById("preview");

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