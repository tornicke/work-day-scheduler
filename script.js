// Define global variables

// Color code based on current time

//Current time
// Editing the default moment.js function so we only keep the day, month and the date, like shown on the mock-up
let CurrentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(CurrentDate)

//Current time gets updated 
//var now = setInternal(function()) {
    //CurrentDate -= 1000;
//}

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

