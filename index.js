const now = new Date()
const utcString = now.toUTCString();
console.log(utcString)

document.getElementById("time").innerHTML= utcString