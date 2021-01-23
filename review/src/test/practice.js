const movies = require("./movies.json");

//take the movies data and try to maneuver it

//slice last 10
// console.log(movies.length)
/*
var sliced = movies.slice(85, 99)
console.log("BELOW IS SLICED ARRAY",sliced)
*/
//splice out a few movies in the middle
/*
var spliced = movies.splice(1,2)
*/
//sort movies by their name/year/id

//sort by name
/*
var sorted = movies.sort((a, b)=>{
if (a.title > b.title){
    return 1;
} else if (a.title < b. title) {
    return -1;
} else {
    return 0;
}
})
*/
//sort by year
/*
var sorted = movies.sort((a, b)=>{
    if(a.year > b.year){
        return 1
    } else if (a.year < b.year){
        return -1
    } else {
        return 0
    }
})
console.log(sorted)
*/

//filter movies by keywords, tags, storyline
var filtered = movies.filter((o, i)=>{
    return o.year <= 2016
})
console.log(filtered)