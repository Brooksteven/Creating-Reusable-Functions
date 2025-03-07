//Part 1: Thinking Functionally
//source: geeksforgeeks.org an dlecture 308H.4 under topic Data Collections and several topics in 308H.5 - functions


//Question 1
let arr = [1, 2, 3, 4]

function sum(arr){
    let sum = 0; //here we are initializing the sum

    //here we are going to iterate through all the elements and then add them to the sum
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];

    return sum;
}

console.log(sum(arr))



//Question 2
let arr2 = [1, 2, 3, 2]
//declare varaiable

function totalAvg(arr2){
    let sum = 0

    for (let i = 0; i < arr2.length; i++)
        sum += arr2[i]

    return avg = sum / arr2.length
}

console.log(totalAvg(arr2))


//Question 3
let strings = [
    "where is the love by black eye peas",
    "hit me baby one more time by britney spears",
    "got a long way to go by cassie",
    "you are the sunshine of my life by stevie wonder"
]
//declaring string

function longestString(strings){
    //here we are declaring our function "longestString" that is going to take an array called strings. Strings is the input.

    let longest = ""
    //here we create a variable that will hold an ampty string, but we could have also did strings[0] to start with the first string instead of an empty string, but both start with 0 so it doesn't matter.
    //we have this variable with an empty string so we can compare it to the length of the current string "strings[i].length" and it will keep going through until 

    for (let i = 0; i < strings.length; i++){
        if (strings[i].length > longest.length){
            longest = strings[i]
        }
    }

    return longest
}
console.log(longestString(strings))


//Question 4


//Part 2: Thinking Methodically
