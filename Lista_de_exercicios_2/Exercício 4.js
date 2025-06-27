
function fatorial(n){

    if(n<0){
        return("Fatorial não existe para números negativos");
    }

    if (n===0){
        return 1;
    }
    return n*fatorial(n-1);
}

console.log(fatorial(-1))
console.log(fatorial (0))
console.log(fatorial (10))
