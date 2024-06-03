let testArr = ["eins","zwei","drei","vier"]
console.log(testArr[testArr.length-1]);

var struc =
{
level1:
{
level2:
{
param1: 3.14,
param2: 10.01
}
}
};

console.log(struc.level1.level2.param2);
console.log(struc.level1.level2.param1);

function rechner (zahl1,zahl2,op){

    let ergebnis;
    if (op==="+")
        ergebnis = add(zahl1,zahl2);
    else if(op==="-")
        ergebnis = sub(zahl1,zahl2)

    console.log("Das Ergebnis lautet: "+ergebnis+".");
}


function add (zahl1,zahl2){
    return zahl1+zahl2
};

function sub (zahl1,zahl2){
    return zahl1-zahl2
}

rechner(2,5,"+");
rechner(9,4,"-");