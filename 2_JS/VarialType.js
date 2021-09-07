var number = 1;
var object = "Hi vlog! Welcome to my guys";
var a = [1, 2, 3, 4, 5, 6];
var b = { one: 1, "two": "two", three: 3 };
var empty = null;



console.log(a);
console.log(typeof b.three);
console.log(`The variable ${a} is of type ${typeof number}`);
console.log(b.six);
console.log(`The variable ${b.six} is of type ${typeof b.six}`);
console.log(empty);
console.log(`The variable ${empty} is of type ${typeof empty}`);

console.log(`${b.one}`);
console.log(`The variable ${b.one} is of type ${typeof b.one}`);

console.log(object);
console.log(`The variable ${object} is of type ${typeof object}`);

//b.four = "Hi all";
//console.log(b);
///b["five"] = ["HAHAHHA", "MEOW"];
//console.log(b);