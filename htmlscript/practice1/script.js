const form=document.getElementById("greet")
const nameinput=document.getElementById("getname");
const message=document.getElementById("result")

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    const name=nameinput.value;

    if (!name) {
        message.textContent = "名前を入力してください";
        return;
    }

    message.textContent=`こんにちは、${name}さん`;

});