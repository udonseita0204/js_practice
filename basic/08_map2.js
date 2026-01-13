//ランダムな整数を生成する関数
const getRandomInt=()=>Math.floor(Math.random()*100)

//loop回数の指定
const loop=10;
let ArrayInt=[];

//loop回数分だけ配列を生成
for(i=0;i<loop;i++){
    ArrayInt[i]=getRandomInt();
}

console.log(ArrayInt)