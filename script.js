var currentDayEl = $("#currentDay")
var hourEl = $(".hour")
var testEl = $(".testClass")
var timeReference = $(".timeReference")
var timeArray = timeReference.text().trim().split(" ")
var numberTimeArray = timeArray.map(Number);
var description = $(".description")

var eventTime = 0

console.log(timeArray)

var todayHeader = moment().format("dddd, MMMM YYYY")
var currentTime = moment().format("h A")
var military = moment().format("H")
// var militaryNumber = parseInt(military)
var militaryNumber = 11
var militaryEvening = militaryNumber - 12


currentDayEl.text(todayHeader)

console.log(military)
console.log(militaryNumber)
console.log(militaryEvening)

function timeConverter(){
    if (militaryNumber > 12){
        militaryNumber -= 12
    }
}

function checkTense(){
    timeConverter();
    
    console.log(militaryNumber)
    for (var i = 0; i < numberTimeArray.length; i++){
        eventTime = numberTimeArray[i]
        if(militaryNumber < eventTime){
            description.removeClass("present")
            description.removeClass("past")
            description.addClass("future")
        } else if (militaryNumber > eventTime){
            description.removeClass("present")
            description.removeClass("future")
            description.addClass("past")
        } else {
            description.removeClass("future")
            description.removeClass("past")
            description.addClass("present")
        }
    }
}
checkTense();




















// An idea change back to hourEl This works individually

// function test2(){
//     if(currentTime.split(" ").join("") === testEl.text().split(" ").join("").trim()){
//         testEl.addClass("present")
//     } else{
//         testEl.addClass("past")
//     }
// }
// test2();
