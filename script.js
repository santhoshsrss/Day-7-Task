//* Get all the countries from the Asia continent /region using the Filter function

var a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.onload = function(){
    var data = a.response
    var result = JSON.parse(data);
    var res = result.filter((ele)=>{
if(ele.region==="Asia")
    return ele.name;
   });
    console.log(res);
}
//.....................................................
// * Get all the countries with a population of less than 2 lakhs using Filter function

var a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.onload = function(){
    var data = a.response
    var result = JSON.parse(data);
    var res1 = result.filter((ele)=>ele.population<200000)
    var res2 = res1.map((ele)=>`${ele.population}:${ele.name.common}`)
    console.log(res2)
}
//................................................................
//* Print the following details name, capital, flag using forEach function

var a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.onload = function(){
    var data = a.response
    var result = JSON.parse(data);
    result.forEach(element => {
        console.log(element.name.common+" "+element.capital+" "+element.flags.png)
        });
}
//......................................................................................
//* Print the total population of countries using reduce function

var a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.onload = function(){
    var data = a.response
    var result = JSON.parse(data);
    var res = result.reduce((acc,cv)=>acc+cv.population,0)
console.log(res)
}
//...................................................................................
//* Print the country which uses US Dollars as currency.

var a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v2/all");
a.send();
a.onload = function(){
    var data = a.response
    var result = JSON.parse(data);
    var res = result.filter((ele)=>{
    for(let key in ele.currencies){
        if(ele.currencies[key].code==="USD"){
            console.log(ele.name)
        }
    }
    
    })

}
//....................................................................................

