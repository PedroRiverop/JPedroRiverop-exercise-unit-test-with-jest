
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen (cantidad) {

    let conversor = oneEuroIs.JPY / oneEuroIs.USD;
    return cantidad * conversor;
}
function fromEuroToDollar (cantidad) {
    return cantidad * oneEuroIs.USD
}
function fromYenToPound (cantidad) {
    // 1 jpy es 1/156.5 Eur,    1 Eur es 0.87 GBP
    // 1 JPY es 0.87 / 156.5gbp
    let conversor = oneEuroIs.GBP / oneEuroIs.JPY;
    return cantidad * conversor;
};



module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };