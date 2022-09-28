function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    function convert(a,b){
        var x= a * b;
        return x;
    }
console.log(convert(amount,rate));
}
