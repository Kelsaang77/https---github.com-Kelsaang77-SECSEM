
function area(b,h){
    c=(b*h)/2;
    console.log(c);
    return c;
}
area(3,2);
area(7,4);
area(10,10);

function giveMeSomething(i){
    b = "Something" +" "+ i
    console.log(b)
    return b

}
giveMeSomething("is better than nothing")
giveMeSomething("Bob Jane")
giveMeSomething("Something")

function points(a,b){
    c= (a*2)+(b*3)
    console.log(c)
    return c

}
points(1,1)
points(7,5)
points(38,8)


function lessThan100(a,b){

    c=a+b;
    if(c < 100){
        console.log(true);
        return true;


    }
    else{
        console.lof(false);
        return false;
    }
}

lessThan100(22, 15);
lessThan100(83, 77);

function addUp(a){
    count=0;
    if (a <= 1000){
        for(let i=1; i<=a; i++){
            count+=i;
        }
        return count;
    }
}
console.log(addUp(4))
console.log(addUp(13))
console.log(addUp(600))

function oddishOrEvenish(a){
    d=0;
    b=a.toString();
    for(let i = 0; i < b.length; i++){
        c=parseInt(b[i]);

        d += c;
    
    }
    if(d%2==0){
        console.log("Evenish");
    
    }
    else{
        console.log("Oddish");
    }
}
oddishOrEvenish(43);
oddishOrEvenish(373);
oddishOrEvenish(4433);

function primeInRange(n1,n2){
    for (n1; n1<=n2; n1++){
        if(n1<2){
            continue
        }
        let isPrime = true;
        for(let j=2; j<Math.sqrt(n1); j++){
            if (n1 % j ===0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
                console.log("Prime number is range: ",n1);
                }
            }
        console.log("No prime numbers in range.");
        return false;

}
primeInRange(10, 15);
primeInRange(63, 66);

// shift left one by power of two
function shiftToLeft(a,b){
    c = a*(2**b);
    console.log(c);
}
shiftToLeft(5,2);
shiftToLeft(10,3);
shiftToLeft(-32,2);
shiftToLeft(-6,5);
shiftToLeft(12,4);
shiftToLeft(46,6);

function binary(a){
    res='';
    let c=parseInt(a);
    if (c<=1024){
    while(c > 0)
    {
        let d = c % 2;
        res = d.toString() + resizeBy;
        c =Math.floor(c / 2);
    }
    comsole.log(res);
    }
}
binary(10);
binary(15);
binary(1025);