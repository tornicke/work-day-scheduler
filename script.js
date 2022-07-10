// Define global variables

// Color code based on current time

//Current time
// Editing the default moment.js function so we only keep the day, month and the date, like shown on the mock-up
//"CurrentDate" is what is displayed on the website header (Day, month, date)
let CurrentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(CurrentDate)

//"currentTime" is the actual current time for the user when they are visiting the website
let currentTime = moment().format("h"); 
var currentTimeElement = document.getElementById("textarea")

//Setting the grey color for the "past" time
if (currentTimeElement < currentTime) {
    $("textarea").addClass("past")
}

//Setting the red color for the "present" time
if (currentTimeElement == currentTime) {
    $("textarea").addClass("present")
}

//Setting the green color for the "future" time
if (currentTimeElement > currentTime) {
    $("textarea").addClass("future")
}

// Loop over time slots - each loop should compare current time with time slot
// based on that add classes
// time slot < current hour - past class to text area
// index == current -> present
// else - future


// Show different text that user has already entered
// Get the value & display
// Loop to show the user input for each time slot
for (let index = 9; index <= 17; index++) {
    $(".user-input-" + index).val(localStorage.getItem(index))
}


// Allow user to save/update text

// Button - on click of that button - save user input to local storage
// 1 event listener that will be shared by all buttons
$(".submitBtn").on("click", function () {
    // Save user input to local storage
    // Search for the textarea element & grab the value
    // $(this) = similar to current target where event was triggered
    var text = $(this).siblings(".description").val();
    // Save it to localStorage corresponding to the time
    var time = $(this).siblings(".time-block").attr("id");
    localStorage.setItem(time, text);
})

