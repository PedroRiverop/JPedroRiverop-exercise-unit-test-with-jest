
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test ("One dollar should be 146.26 JPY", function() {
    const  { fromDollarToYen} = require('./app.js');
    
    expect(fromDollarToYen(10)).toBe(1462.6168224299065);
    
});

test ("One Euro should be 1.07 Dollar", function() {
    const  { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(100)).toBe(107);
});