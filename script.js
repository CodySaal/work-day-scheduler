var currentDayEl = $("#currentDay")

console.log(currentDayEl)
var todayHeader = moment().format("dddd, MMMM YYYY")

currentDayEl.text(todayHeader)