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