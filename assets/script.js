var nine = document.getElementById("9am");
var nineButton = document.getElementById("9button");
var ten = document.getElementById("10am");
var tenButton = document.getElementById("10button");
var eleven = document.getElementById("11am");
var elevenButton = document.getElementById("11button");
var twelve = document.getElementById("12pm");
var twelveButton = document.getElementById("12button");
var one = document.getElementById("1pm");
var oneButton = document.getElementById("1button");
var two = document.getElementById("2pm");
var twoButton = document.getElementById("2button");
var three = document.getElementById("3pm");
var threeButton = document.getElementById("3button");
var four = document.getElementById("4pm");
var fourButton = document.getElementById("4button");
var five = document.getElementById("5pm");
var fiveButton = document.getElementById("5button");

//to display time at the top of page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//to obtain the hour value of the time.
var time = new Date().getHours()


//to change colour of time blocks according to time [9am]
if (time >= 9 && time <10) {
    nine.style.backgroundColor = 'red';
} else if (time >= 10) {
    nine.style.backgroundColor = 'LightGray';
} else {
    nine.style.backgroundColor = 'LightGreen';
}

//to change colour of time blocks according to time [10am]
if (time >= 10 && time <11) {
    ten.style.backgroundColor = 'red';
} else if (time >= 11) {
    ten.style.backgroundColor = 'LightGray';
} else {
    ten.style.backgroundColor = 'LightGreen';
}

//to change colour of time blocks according to time [11am]
if (time >= 11 && time <12) {
    eleven.style.backgroundColor = 'red';
} else if (time >= 12) {
    eleven.style.backgroundColor = 'LightGray';
} else {
    eleven.style.backgroundColor = 'LightGreen';
}

//to change colour of time blocks according to time [12pm]
if (time >= 12 && time <13) {
    twelve.style.backgroundColor = 'red';
} else if (time >= 13) {
    twelve.style.backgroundColor = 'LightGray';
} else {
    twelve.style.backgroundColor = 'LightGreen';
}

//to change colour of time blocks according to time [1pm]
if (time >= 13 && time <14) {
    one.style.backgroundColor = 'red';
} else if (time >= 14) {
    one.style.backgroundColor = 'LightGray';
} else {
    one.style.backgroundColor = 'LightGreen';
}

//to change colour of time blocks according to time [2pm]
if (time >= 14 && time <15) {
    two.style.backgroundColor = 'red';
} else if (time >= 15) {
    two.style.backgroundColor = 'LightGray';
} else {
    two.style.backgroundColor = 'LightGreen';
}

//to change colour of time blocks according to time [3pm]
if (time >= 15 && time <16) {
    three.style.backgroundColor = 'red';
} else if (time >= 16) {
    three.style.backgroundColor = 'LightGray';
} else {
    three.style.backgroundColor = 'LightGreen';
}

//to change colour of time blocks according to time [4pm]
if (time >= 16 && time <17) {
    four.style.backgroundColor = 'red';
} else if (time >= 17) {
    four.style.backgroundColor = 'LightGray';
} else {
    four.style.backgroundColor = 'LightGreen';
}

//to change colour of time blocks according to time [5pm]
if (time >= 17 && time <18) {
    five.style.backgroundColor = 'red';
} else if (time >= 18) {
    five.style.backgroundColor = 'LightGray';
} else {
    five.style.backgroundColor = 'LightGreen';
}

//storing to local storage [9am]

var input9 = localStorage.getItem("9");

nine.value = input9;

nineButton.addEventListener("click", function() {

    localStorage.setItem("9", nine.value);
});

//storing to local storage [10am]

var input10 = localStorage.getItem("10");

ten.value = input10;

tenButton.addEventListener("click", function() {

    localStorage.setItem("10", ten.value);
});

//storing to local storage [11am]

var input11 = localStorage.getItem("11");

eleven.value = input11;

elevenButton.addEventListener("click", function() {

    localStorage.setItem("11", eleven.value);
});

//storing to local storage [12pm]

var input12 = localStorage.getItem("12");

twelve.value = input12;

twelveButton.addEventListener("click", function() {

    localStorage.setItem("12", twelve.value);
});

//storing to local storage [1pm]

var input1 = localStorage.getItem("1");

one.value = input1;

oneButton.addEventListener("click", function() {

    localStorage.setItem("1", one.value);
});

//storing to local storage [2pm]

var input2 = localStorage.getItem("2");

two.value = input2;

twoButton.addEventListener("click", function() {

    localStorage.setItem("2", two.value);
});

//storing to local storage [3pm]

var input3 = localStorage.getItem("3");

three.value = input3;

threeButton.addEventListener("click", function() {

    localStorage.setItem("3", three.value);
});

//storing to local storage [4pm]

var input4 = localStorage.getItem("4");

four.value = input4;

fourButton.addEventListener("click", function() {

    localStorage.setItem("4", four.value);
});

//storing to local storage [5pm]

var input5 = localStorage.getItem("5");

five.value = input5;

fiveButton.addEventListener("click", function() {

    localStorage.setItem("5", five.value);
});



