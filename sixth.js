function main() {
    var breakfasts = ['Cinnamon Doughnuts', 'Waffles', 'Granola', 'Chorizo Burrito', 'French Toast'];
    var index = parseInt(readLine(), 10)
   
    //replace the corresponding element by "Fluffy Pancakes"
    breakfasts[index] = "Fluffy Pancakes";
  
    //output the menu to the console
    console.log(breakfasts);
}
