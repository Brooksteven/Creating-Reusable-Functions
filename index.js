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

function totalAvg(arr2){
    let sum = 0

    for (let i = 0; i < arr2.length; i++)
        sum += arr2[i]

    return avg = sum / arr2.length
}

console.log(totalAvg(arr2))


//Question 3