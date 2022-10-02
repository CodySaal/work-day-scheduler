var currentDayEl = $("#currentDay")
var hourEl = $(".hour")
var testEl = $(".testClass")
var timeReference = $(".timeReference")
var timeBlock = $(".time-block")
var saveBtn = $(".saveBtn")
var saveAlert = $(".eventSaved")
var clearBtn = $(".clearSchedule")

var timeArray = timeReference.text().trim().split(" ")
var numberTimeArray = timeArray.map(Number);
var description = $(".description")



var todayHeader = moment().format("dddd, MMMM YYYY")
var currentTimeString = moment().format("HH")
var currentTime = parseInt(currentTimeString)

saveAlert.hide()
currentDayEl.text(todayHeader)

function determineTense(){
    description.each(function(){
        var eventTime = parseInt($(this).attr("id"));
        console.log(this)
        console.log($(this).attr("id"))
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

saveBtn.on("click", function(){
    var eventText = $(this).siblings(".description").val();
    var eventTime = $(this).siblings(".description").attr("id");
    console.log(eventTime)
    localStorage.setItem(eventTime, eventText);
    saveAlert.show().fadeOut(1500)
})

clearBtn.on("click", function(){
    localStorage.clear();
    window.location.reload()
})


$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));









determineTense();












