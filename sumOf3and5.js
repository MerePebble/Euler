/* Question 1 (didn't solve entirely on my own :( )
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sumOfMultiple(limit) { // Declaring function with a limit
    let sum = 0;
    for (let i = 3; i < limit; i += 1) { // for every i starting form 3 below 1000 added 1 for each loop
        if (i % 3 === 0 || i % 5 === 0) { //if i is divisable by 3 or 5 add value of i to te sum
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfMultiple(1000)); // Calling on function with limit 1000
