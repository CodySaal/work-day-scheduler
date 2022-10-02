var currentDayEl = $("#currentDay")
var hourEl = $(".hour")
var testEl = $(".testClass")
var timeReference = $(".timeReference")
var timeBlock = $(".time-block")
var timeArray = timeReference.text().trim().split(" ")
var numberTimeArray = timeArray.map(Number);
var description = $(".description")



var todayHeader = moment().format("dddd, MMMM YYYY")
var currentTimeString = moment().format("HH")
var currentTime = parseInt(currentTimeString)
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
        console.log(eventTime)
        console.log(currentTime)
    })

}

determineTense();

















// An idea change back to hourEl This works individually

// function test2(){
//     if(currentTime.split(" ").join("") === testEl.text().split(" ").join("").trim()){
//         testEl.addClass("present")
//     } else{
//         testEl.addClass("past")
//     }
// }
// test2();
