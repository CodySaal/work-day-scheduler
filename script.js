var currentDayEl = $("#currentDay")

var hourEl = $(".hour")

var testEl = $(".testClass")

var todayHeader = moment().format("dddd, MMMM YYYY")

var currentTime = moment().format("h A")


currentDayEl.text(todayHeader)

// function test(){
//     if (currentTime == testEl.text()){
//         testEl.addClass("present")
//     } else{
//         testEl.addClass("past")
//     }
// }
// console.log(testEl.text())
// console.log(hourEl.text())
// console.log(currentTime)
// test();




// An idea change back to hourEl This works individually

// function test2(){
//     if(currentTime.split(" ").join("") === testEl.text().split(" ").join("").trim()){
//         testEl.addClass("present")
//     } else{
//         testEl.addClass("past")
//     }
// }
// test2();

console.log(currentTime.split(" ").join(""))
// Ask Josh about this.
console.log(hourEl.text().split(" ").join(""))
console.log(testEl.text().split(" ").join(""))
console.log(testEl.text().split(" ").join("").trim())
console.log(currentTime.split(" ").join(""))

console.log(currentTime.trim())
console.log(testEl.text().trim())

function test3(){
    if(currentTime === hourEl.text().trim()){
        hourEl.addClass("present")
    } else {
        hourEl.addClass("past")
    }
}
test3();
console.log(hourEl.text().split(" ").join("").trim())

var hourArray = hourEl.text().split(/\r?\n/)
console.log(hourArray)
// Maybe split at '?