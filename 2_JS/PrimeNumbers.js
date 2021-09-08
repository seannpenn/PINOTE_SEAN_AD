var number = 5;

for (var x = 0; x < 2; x++) {
    if (number % 2 == 0) {
        console.log(`${number} is a prime number? false`);

    } else {

        console.log(`${number} is a prime number? true`);
    }
    number = 6;
}

//or


// console.log("5 is a prime number?", 5 % 2 == 0 ? "false" : "true");
// console.log("6 is a prime number?", 6 % 2 == 0 ? "false" : "true");