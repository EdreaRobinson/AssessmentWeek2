///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const totalPrice = cart.reduce((acc, cur) => {
    return acc + cur.price;
}, 0);

console.log(totalPrice)

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let total = (cartTotal + (cartTotal * tax) - (cartTotal * couponValue));
    return total
}

console.log(calcFinalPrice(totalPrice, .25, .10))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    Customer:
    Name (string) - needed to maintain record
    Email (string) - needed to send promotions to
    Phone Number (string/number) - needed to contact regarding orders and/or reservations
    Number of visits (number) - can be used to track rewards program
    Birthday (string) - can be used to send promotional gift


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = [
    {   name: "Hannah Smith",
        email: "hannahs123@gmail.com",
        phoneNumber: 3372324357,
        numVisits: 3,
        birthday: "February 24"
    },
    {
        name: "John Catalan",
        email: "johncat@yahoo.com",
        phoneNumber: 3372374100,
        numVisits: 5,
        birthday: "May 24"
    },
    {
        name: "David Milligan",
        email: "dmilligan45@hotmail.com",
        phoneNumber: 3378961234,
        numVisits: 1,
        birthday: "April 09"
    },
]

console.log(customer)