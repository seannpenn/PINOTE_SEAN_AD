var product = '';

var max = 10;
for (var i = 1; i <= `${max}`; i++) {
    for (var x = 1; x <= `${max}`; x++) {
        product += (i * x) + '  ';
    }
    product += '\n';
}
console.log(product);