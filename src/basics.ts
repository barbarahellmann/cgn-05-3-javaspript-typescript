// 1. Declare a variable named 'age' of type 'number' and assign a value to it.
const age:number = 15;


// 2. Write a 'for' loop that outputs the numbers from 1 to 'age
for(let i:number = 0; i < age; i++) {
    console.log("Zähle die Jahre = " + i)
}

let j:number = 0;
while (j > age) {
    console.log("Jahreszähler = " + j)
    j++
}

// 3. Use an 'if-else' statement to check if 'age' is greater than 18.
// Display appropriate messages depending on whether the condition is met or not.

if(age < 18) {
    console.log(age + " ist kleiner als " + "18")
} else {
    console.log(age + "ist größer als " + "18")
}

// 4. Declare a variable named 'score' of type 'number' and assign it the value 0.

let score:number = 0;

// Step 5: Use an 'if' statement to check if 'score' has a value.
// Display 'Score is available.' if 'score' has a value other than 0.

if(score == NaN) {
    console.log("Score hat no value")
} else {
    console.log("Score hat den value = " + score)
}

// Step 6: Use an 'if-else' statement to check if 'score' is evaluated as a 'truthy' value.
// Display 'Score is evaluated as truthy.' if 'score' is considered 'truthy'.

if(score == NaN) {
    console.log("Score" + score+ " is evaluated as falsy.")
} else {
    console.log("Score "+ score+ " is evaluated as truthy.")
}

// Step 7: Declare a variable named 'username' of type 'string' and assign it the value '' (empty string).

let username:string = "";

// Step 8: Use an 'if' statement to check if 'username' has a value.

if(username == "" ) {
    console.log("Username has no value.")
} else {
    console.log("Username has value: " + username)
}

// Display 'Username is available.' if 'username' has a value.

if(username == null ) {
    console.log("Username is available.")
} else {
    console.log("Username ist not available")
}

// Step 9: Use an 'if-else' statement to check if 'username' is evaluated as a 'falsy' value.
// Display 'Username is evaluated as falsy.' if 'username' is considered 'falsy'.

// Umdeklarieren der Variable hat nicht gekappt, obwohl es ein let ist

if(username == "") {
    console.log("Username is evaluated as falsy.")
} else {
    console.log("Username is evaluated as truthy.")
}

// Step 10: Declare a variable named 'isAdmin' of type 'boolean' and assign it the value 'false'.

let isAdmin:boolean = false;

// Step 11: Use an 'if-else' statement to check if 'isAdmin' is evaluated as a 'truthy' value.
// Display 'isAdmin is evaluated as truthy.' if 'isAdmin' is considered 'truthy'.

if(isAdmin == false) {
    console.log("isAdmin value " + isAdmin + " is evaluated as falsy.")
} else {
    console.log("isAdmin value " + isAdmin + " is evaluated as truthy.")
}

// Step 12: Use an 'if' statement to check if 'isAdmin' is 'false'.
// Display 'isAdmin is false.' if 'isAdmin' has the value 'false'.
isAdmin == false

if(isAdmin == false) {
    console.log("isAdmin value " + isAdmin + " is evaluated as truthy.")
} else {
    console.log("isAdmin value " + isAdmin + " is evaluated as false.")
}
