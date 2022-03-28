const exponencial = (base, exp) => {
    
    const elevar = (base, exp) => {

        num = base
        for (let i = 1; i < exp; i++) {
            num = num * base 
        }
        return num
    }

    if(exp === 0 ){
        return 1
    } else if( exp > 0){
        return elevar(base, exp)
    }else if( exp < 0 ){
        exp = exp * -1
        return 1/elevar(base, exp)
    }
}

console.log(exponencial(2,2))
console.log(exponencial(3,0))
console.log(exponencial(5,-2))
