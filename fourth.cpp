function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
  for(var i=0;i<=prices.length-1;i++){
      prices[i] += increase;
  }
  console.log(prices);
}
