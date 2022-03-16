const fromDollarToYen = (dollar) =>{
    return dollar * 0.0084;
}

const fromEuroToDollar = (euro) =>{
    return euro * 1.1;
}

const fromYenToPound = (yen) =>{
    return yen * 0.0064
}

// console.log(fromYenToPound(100))
// console.log(fromEuroToDollar(10))
// console.log(fromDollarToYen(100))
module.exports = { fromDollarToYen, fromEuroToDollar , fromYenToPound };