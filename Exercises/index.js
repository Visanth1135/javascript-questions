obj1={
    name:'abcd',
    display:function(){
        console.log(this.name)
    },
};

var obj2={
    name:'abhgvg'
}

var obj3=obj1;
obj1.display();// abcd
obj1.display.call(obj2);//abhgvg
console.log(obj1.name)// abcd
console.log(obj3.name)//abcd