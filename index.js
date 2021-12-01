// Access the IDs in the DOM
const countdownDisplay = document.getElementById("countdown-days")
const countdownHours = document.getElementById("countdown-hours")
const countdownMinutes = document.getElementById("countdown-minutes")
const countdownSeconds = document.getElementById("countdown-seconds")
const christmasHeader = document.getElementById("christmas-header")


    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    
    // Stretch goals:
    // - Display hours, minutes, seconds.
    function renderCountdown(xmas){
    // Starting date
        const msInADay = 24 * 60 * 60 * 1000
        const hoursInDay = 23 // 24 or 0-23
        const minAndSec = 59 // 60 or 0-59
        const date = new Date()
        const xmasDate = new Date(xmas)
        const difference = xmasDate.getTime() - date.getTime()
        
    // Calculate days, hours, minutes, seconds
        const days = Math.floor(difference / msInADay)
        const hours = Math.floor(hoursInDay - date.getHours())
        const minutes = Math.floor(minAndSec - date.getMinutes())
        const seconds = Math.floor(minAndSec - date.getSeconds())

        // Print to screen
        countdownDisplay.textContent = days
        countdownHours.textContent = hours
        countdownMinutes.textContent = minutes
        countdownSeconds.textContent = seconds 
    }

 
// Stretch goals:
// - Add a countdown for another festival, your birthday, or Christmas 2022.
// On button click, change the header text and call the function and run it every 1 second
let two021
let two022

document.getElementById("btn-2021").addEventListener('click', function(){
    clearInterval(two021)
    clearInterval(two022)
    christmasHeader.textContent = 'Christmas Countdown 2021 🎄'
    two021 = setInterval(renderCountdown, 1000, 'December 25, 2021')
     
})

document.getElementById("btn-2022").addEventListener('click', function(){
    clearInterval(two021)
    clearInterval(two022)
    christmasHeader.textContent = 'Christmas Countdown 2022 🎄'
    two022 = setInterval(renderCountdown, 1000, 'December 25, 2022')
})





