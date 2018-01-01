var lowercase = "hello"
var uppercase = "HELLO"

function shout(string)  {
  return string.toUpperCase()
}
function whisper(string)  {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string)  {
  
  if (string.toLowerCase(true) === lowercase)  {
    return 'I can\'t hear you!'
  }
 else if (string.toUpperCase(false) === uppercase) {
    return 'YES INDEED!'
  }
}
