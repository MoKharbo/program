function kubus(lengte, hoogte, diepte){
    return lengte * hoogte * diepte
}
let kubusInhoud = kubus(10, 5, 10);
console.log(kubusInhoud);

function inhoudkubus(diameter, hoogte1){
    let p2i = Math.PI
    return diameter * p2i * hoogte1
}

let inhoudK = inhoudkubus(10, 5);
console.log(inhoudK); 

function driehoek(lengte2, hoogte2){
    return Math.pow(hoogte2,2) + Math.pow(lengte2,2)
}

let d32 = driehoek(10,20);
console.log(d32)

function getallen(one,two,three,four,five,six,seven){
    let gem = one + two + three + four + five + six + seven
    return gem / 7
}

let gemm = getallen(2,6,4,3,7,2,5)
console.log(gemm)