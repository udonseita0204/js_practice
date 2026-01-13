//mapの第2引数thisArgを使ってみたいので、オブジェクトを作成
let booklist={
    '1陸特過去問':4000,
    '電気工事士':1500,
    '基本情報':1000,
    'ITPASSPO☆':500
}

const orders=['基本情報','ITPASSPO☆'];

const Howmach=orders.map(
    function (value,index,array){
        return this[value]
    },booklist);

console.log(Howmach)