const user={
    name:"momotaro",
    sayhello: function(){
        console.log(`hello,${this.name}!`)
    }
};

user.sayhello();