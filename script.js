// select the element
// write function to update the message content
// add the event listener
var getPotus = document.getElementById('potus')
var potusClick = function(e) {
  e.preventDefault()
  document.getElementById('message').textContent += "You did it! You found POTUS!!"
}
getPotus.addEventListener('click', potusClick)


//create a count down timer
var countdown = document.getElementById('timer')
var countItDown = function() {
  var currentTime = parseFloat(countdown.textContent)
  if (currentTime > 0) {
    countdown.textContent = currentTime - 1
  } else {
    document.getElementById('time').textContent = "Too slow!"
    window.clearInterval(timer)
  }
}
var timer = window.setInterval(countItDown, 1000)

//need to complete the startOver function below
// var startOver = document.getElementById('startOver')
// var clickStart = function() {
//
// }
