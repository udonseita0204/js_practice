const form=document.getElementById("judgeform");
const inputage=document.getElementById("age");
const message=document.getElementById("msg")

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const userage=Number(inputage.value);

    if(!userage){
        message.textContent="年齢を入力してください"
    }
    else if(userage>=20){
        message.textContent=`年齢は${userage}です`;
    }
    else{
        message.textContent=`未成年です`;
    }
});

