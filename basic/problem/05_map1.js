/*ここからはいくつか問題を解く
１．numsの各要素を10倍した新しい配列を作る
２．namesのすべての文字列を 大文字 にした配列を作る
３．priceに消費税10%を加えた価格の配列を map で作ってください
４．scoresにたいしてmap を使って60以上 → "合格"、60未満 → "不合格"に変換した配列を作ってください。
これ以降の問題文は面倒なので記載しない。
*/
const nums = [1, 2, 3, 4, 5];
const names = ["taro", "hanako", "jiro"];
const prices = [100, 250, 300];
const scores = [45, 80, 62, 90, 30];

const decuple=nums.map(num=>num*10);
const uppernames=names.map(name=>name.toUpperCase());
const tax=prices.map(price=>price*1.1);
const JudgeScore=scores.map(
    function judge(score){
        if(score>=60){
            return '合格'
        }
        else{
            return '不合格'
        }
    }
)
const Even=nums.map(
    function evenfilter(num){
            if(num%2===0){
                return num
            }
            else{
                return 0
            }
    }
)

console.log(decuple)
console.log(uppernames)
console.log(tax)
console.log(JudgeScore)
console.log(Even)