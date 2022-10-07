function main() {
    var country = readLine();
    var capital = readLine();
    
    console.log(countryCard(country, capital));
}

function countryCard(country, capital){
    //complete the function
    //use backtick (` `) for template literal
    return (`Name: ${country}, Capital: ${capital}`);

}
