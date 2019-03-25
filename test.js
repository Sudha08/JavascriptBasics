// alert('Hello Wordl');

var youLikeSweet = false;
var MyNum = 8;

if (youLikeSweet) {
    document.write('Here is the sweet menu...');
} else {
    document.write('You hate sweets...');
}

if (7 > 5) {
    document.write('this expression is true...');
}

if (MyNum > 10) {
    document.write('MyNum is greater than 10...');
}

if (MyNum < 10) {
    document.write('MyNum is less than 10...');
}

if (MyNum == 10) {
    document.write('MyNum is equal to 10...');
} else {
    document.write('myNum is not equal to 10...');
}

// Else If

var myAge = 25;

if (myAge > 30) {
    document.write('Your are over 30!...');
} else if (myAge > 20) {
    document.write('you are over 20...');
} else if (myAge > 10) {
    document.write('You are over 10!...');
} else {
    document.write('You are not over 10!...');
}

// Logical Operators

if (myAge >= 10 && myAge <= 30 ) {
    document.write('You can come, you cool dude!...');
} else {
    document.write('You aint coming...');
}

if (myAge < 18 || myAge > 30 || myAge === 20) {
    document.write('You aint coming...');
} else {
    document.write('You can come, you cool dude!...');
}


// WHILE loop

var age = 5;

while (age < 10) { // make sure the loop is not an infinite loop
    console.log('Your age is less than 10...');
    age++; // to restrict the loop
}

document.write('you are now over 10...'); // executed after the loop

// examples for infinite loop
/* 
    var a =5;
    while (a < 10) { -> will always execute as a is always less than 10
        // something...
    }

    while (1) {
        // something...
    }
*/

// FOR loop

// Example -1

for (i = 0; i < 10; i++) {
    console.log('Your age is less than 10...');
}

document.write('you are now over 10...');

// Example -2

var links = document.getElementsByTagName('a');

for (i = 1; i <= links.length; i++) {
    console.log('This is link ' + i);
}

document.write('all links now looped');


// Break & Continue

for (i = 0; i < 10; i++) {

    // when i = 3 or 5, the code block won't be executed but will be resumed when i = 6
    if (i === 3 || i === 5) {
        continue;
    }

    console.log(i);

    // when i = 7 the loop will be exited or broken off and no further instances will be executed
    if (i === 7) {
        break;
    }
}

document.write('I have exited the loop');

// Practical example of for loop

var links = document.getElementsByTagName('a');

// inspect the html page & check whether a class atrribute is added to all the links
for (i = 0; i < links.length; i++) {

    links[i].className = 'link-' + (i + 1);

}

