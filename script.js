// Define global variables

// Color code based on current time

//Current time
// Editing the default moment.js function so we only keep the day, month and the date, like shown on the mock-up
//"CurrentDate" is what is displayed on the website header (Day, month, date)
var CurrentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(CurrentDate)


// Loop over time slots - each loop should compare current time with time slot
// Based on that add classes to reflect the necessary color
// If time slot < current hour - add tge past class to text area
// Time slot == current -> present
// Else -> future

// currentHour to be compared with the time block hour
// using H in moment.js so it shows the hour in the 24-hour format
var currentHour = parseInt(moment().format("H"));

$(".timeBlock").each(function () {
  var blockHour = parseInt($(this).attr("id"));

  // console.log(blockHour, currentHour); Just for testing purposes, not needed in the actual code
  // Compare the blockHour with the currentHour to determine the color of the relevant row
  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});

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
    var time = $(this).parents(".timeBlock").attr("id");
    localStorage.setItem(time, text);
})

