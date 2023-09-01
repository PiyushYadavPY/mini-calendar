const today = new Date();

const weekArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date").innerHTML = today.getDate();
document.getElementById("day").innerHTML = weekArr[today.getDay()];
document.getElementById("month").innerHTML = monthsArr[today.getMonth()];
document.getElementById("year").innerHTML = today.getFullYear();
