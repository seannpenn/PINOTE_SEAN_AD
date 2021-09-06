var number = 1;
var a = [1, 2, 3, 4, 5, 6];
var b = { one: 1, "two": "two", three: [3] };
var c;
var d = null;

console.log(typeof b.three);
console.log(`The variable ${b.one} is of type ${typeof number}`);
console.log(b);
b.four = "Hi all";
console.log(b);
b["five"] = ["HAHAHHA", "MEOW"];
console.log(b);
console.log(b.six);