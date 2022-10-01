var currentDayEl = $("#currentDay")

var hourEl = $(".hour")

var todayHeader = moment().format("dddd, MMMM YYYY")

var currentTime = moment().format("h A")


currentDayEl.text(todayHeader)

