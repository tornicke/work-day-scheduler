// global variables
// color code based on current time
// show different text that user has already entered



// allow user to save/update text

// button - on click of that button - save user input to local storage
// 1 event listner that will be shared by all buttons
$(".submitBtn").on("click", function () {
    // save user input to local storage
    // search for the textarea element & grab the value
    // $(this) is similar to current target where event was triggered
    var text = $(this).siblings(".user-input").val();
    // save it to localstorage corresponding to the time
    var time = $(this).siblings(".time-slot").attr("id");
    localStorage.setItem(time, text);
})