//次の配列があります。
const users = [
  { name: "taro", age: 20 },
  { name: "hanako", age: 25 },
  { name: "jiro", age: 17 }
];

//map を使って、次の形の配列を作ってください。
//["taro(20)", "hanako(25)", "jiro(17)"]

const renameArray=users.map( user => `${user.name}(${user.age})` );

console.log(renameArray)

/*
上と同じ users を使います。

map を使って、ageだけを1歳増やしたオブジェクトの配列を作ってください
（元の users は変更しないこと）
*/

const GetOlder=users.map(user=>user.age+1)
console.log(GetOlder)


/*
今の users を使って、次を map で作ってみてください。
[
  { label: "taro", isAdult: true },
  { label: "hanako", isAdult: true },
  { label: "jiro", isAdult: false }
]
*/

const judgeadult=users.map(user=>({label:user.name,isAdult: user.age>=20}))

console.log(judgeadult)