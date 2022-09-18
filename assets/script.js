var nine = document.getElementById("9am");
var nineButton = document.getElementById("9button");

//to display time at the top of page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//to change colour of time blocks according to time
var time = new Date().getHours()

console.log(time)

if (time >= 9 && time <10) {
    nine.style.backgroundColor = 'red';
} else if (time > 10) {
    nine.style.backgroundColor = 'LightGray';
} else {
    nine.style.backgroundColor = 'LightGreen';
}

//storing to local storage
var input9 = localStorage.getItem("input9");

nine.textContent = input9;

nineButton.addEventListener("click", function() {
    nine.textContent = input9;
    localStorage.setItem("input9", input9);
});