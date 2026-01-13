//ランダムな整数を生成する関数
const getRandomInt=()=>Math.floor(Math.random()*100)

//loop回数の指定
const loop=5;
let ArraysInt=[];

//loop回数分だけ配列を生成
for(i=0;i<loop;i++){
    ArraysInt[i]=getRandomInt();
}

console.log(ArraysInt)

//配列の各要素を倍にする変数を定義
const doubled=ArraysInt.map(array=>array*2);

console.log(doubled)


//２の倍数のみ100倍する
const Evenfil=ArraysInt.map(
    function (array){
        if(array%2===0){
            return array*100;
        }
        else{
            return array;
        }
    }
)
console.log(Evenfil)