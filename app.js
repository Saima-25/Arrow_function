// syntax let abc=()=>{}
// lamda/ arrow function
var addition = function (a, b) {
    return a + b;
};
console.log(addition(5, 6));
var table = function (a) {
    for (var i = 1; i <= 10; i++)
        console.log(a + " " + 'X' + " " + i + " " + "=" + " " + a * i);
};
table(9);
var areaOfSquare = function (x) {
    var s = x * x;
    console.log(s);
};
areaOfSquare(4);
var country_name = function (c) {
    return c;
};
console.log(country_name);
country_name("KSA");
var areaOfCircle = function (r) {
    var pie = 3.142;
    console.log(pie * r * r);
};
areaOfCircle(5);
