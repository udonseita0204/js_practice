        const scores=[36,40,53,75,92]
        let sum=0;

        //合計点を計算する関数の書き方３種類。

        /*
        for (let i=0; i<scores.length; i++){
            num=num+scores[i]
            console.log(num)
        }
        */  

        scores.forEach( cur => {num+=cur} );
        console.log(num);
        
        /*
        for(const num2 of scores){
            console.log(num2);
        }
        */