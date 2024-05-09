/* Question number 2
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 
1 and 2, the first few terms will be: 1, 2, 3, 5, 8, 13, 21 etc...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

function main(limit) { // new function with a limiter for the loop below
    let a = 1; 
    let b = 2;
    let c = 0;
    let evensum = b; // declaring result and already adding "b" because I didnt add it in the loop the first time

    while (a < limit) {
        c = a + b; // c is my intermediary which carries the value between the a and b

        if (a !== 1) { //this is to omit the first loop and then replace value b with a
        b = a;
        }

        a = c; // at the end I have to update the a with the new value to keep the cycle going
  
        if (c % 2 === 0) { // check to see if c is even and add it to the whole result
            evensum += c;
        }
    }
    return evensum;
}

console.log(main(4000000)); // calling on function with concrete limit