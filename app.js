let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
console.log(fromEuroToDollar(1));
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInEuro = valueInDollar / oneEuroIs["USD"]
    let valueInYen = valueInEuro * oneEuroIs ["JPY"]
    
    // Retornamos el valor en dólares
    return valueInYen;
}
console.log(fromDollarToYen(1));
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInEuro = valueInYen / oneEuroIs["JPY"];
    let valueInPound = valueInEuro * oneEuroIs ["GBP"] 
    
    return valueInPound;
}
console.log(fromYenToPound(1));

const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};

// One euro is: