var product = '';

var max = 10;
for (var i = 1; i <= `${max}`; i++) {
    for (var x = 1; x <= `${max}`; x++) {
        product += (i * x) + '  ';
        if ((i * x) < 10) {
            product += '  ';
        } else {
            product += ' ';
        }

    }
    product += '\n';
}
console.log(product);