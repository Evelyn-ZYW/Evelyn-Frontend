//slice and splice - javascript array

var arr = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
];

var arr2 = [
    "item 8",
    "item 9",
    "item 10",
];

var arr3 = [
    {
        name: "Henry",
        count: 5
    },
    {
        name: "Sam",
        count: 1
    },
    {
        name: "Marge",
        count: 8
    },
    {
        name: "Balke",
        count: 7
    },
    {
        name: "Steph",
        count: 3
    },
];
//slice can takes 2 parameters slice(a, b)
//a is the start item, b is the end item. the result is the items between a and b(including a & b).
//slice does not change the original array
//slice is used to limit the amount of items show on the screen, / pagination页码标注
var sliced = arr.slice(3, 7);
// console.log("sliced", sliced);

//splice can takes 2 parameters splice(a, b)
//a is the start item, b is the number of items that will be taken out
//splice changes the original array
//splice is used to get rid of an item in the array; transfer an item from a list to another
var spliced = arr.splice(3, 2);
// console.log("spliced", spliced, arr);

//concat
//combine multiple made list together then store it all in the database at once
//you have item attributes from other items that you need in your 3rd item, therefore you concatenate them
var concated = arr.concat(arr2);
// console.log("concatenate", concated);

//sort is used for sorting columns like lowest price, highest price, earliest shipping date
var sorted = arr3.sort((a, b) => {
    if (a.count > b.count) {
        //return -1, 1, 0
        return 1;
    } else if (a.count < b.count) {
        return -1;
    } else {
        return 0;
    }
});
// console.log(sorted);

//filtering is used for searchability
var filtered = arr.filter((o, i) => {
    //return false or ture
    /*
    if(o === "item 1"){
        return false
    } else {
        return true
    }
    */

    //    return o !== "item 1"

    return i < 3;
})
// console.log(filtered)

var filtered2 = arr3.filter((o, i) => {
    // return o.name !== "Sam"
    return (o.name.includes("en") || o.name.includes("a")) && o.count > 5;
})
console.log(filtered2)
