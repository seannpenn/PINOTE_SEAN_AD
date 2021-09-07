var height = 6;
var string = '';
for (var x = 0; x <= height; x++) {
    for (var i = 0; i < x; i++) {

        string += "*";
    }
    string += ("\n");
}
console.log(string);