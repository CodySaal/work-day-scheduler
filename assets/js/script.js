// jQuery selectors
var currentDayEl = $("#currentDay");
var saveBtn = $(".saveBtn");
var saveAlert = $(".eventSaved");
var clearBtn = $(".clearSchedule");
var description = $(".description");

// Moment.js
var todayHeader = moment().format("dddd, MMMM YYYY");
var currentTimeString = moment().format("HH");
var currentTime = parseInt(currentTimeString);

// Hides alert until save button is pressed
saveAlert.hide();

// Places the current day at the top of the schedule
currentDayEl.text(todayHeader);

// Colors the timeblocks depending on whether the time is in the past, present, or future.
function determineTense(){
    description.each(function(){
        var eventTime = parseInt($(this).attr("id"));
        if (eventTime === currentTime){
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        } else if (eventTime > currentTime){
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        } else {
            $(this).addClass("past")
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
    })

}
// Saves events to local storage
saveBtn.on("click", function(){
    var eventText = $(this).siblings(".description").val();
    var eventTime = $(this).siblings(".description").attr("id");
    localStorage.setItem(eventTime, eventText);
    saveAlert.show().fadeOut(1500);
})
// Clears local storage
clearBtn.on("click", function(){
    localStorage.clear();
    window.location.reload();
})

// Retrieves local storage and sets it as the timeblock text.
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));

// Calls the function to color the timeblocks
determineTense();












