function kubus(lengte, hoogte, diepte){
    return lengte * hoogte * diepte
}
let kubusInhoud = kubus(15, 10, 10);
console.log(kubusInhoud);
function cilindir(diameter, hoogte1){
    let p2i = Math.PI
    let radius = diameter / 2 ;
    return Math.pow(radius,2) * p2i * hoogte1
}
let inhoudK = cilindir(20, 50);
console.log(inhoudK); 
function driehoek(lengte2, hoogte2){
    return Math.sqrt(Math.pow(lengte2, 2) + Math.pow(hoogte2, 2));
}
let mango = driehoek(20,50);
console.log(mango)
function getallen(one,two,three,four,five,six,seven){
    let gem = one + two + three + four + five + six + seven
    return gem / 7
}
let gemm = getallen(2,6,4,7,7,2,1)
console.log(gemm)
