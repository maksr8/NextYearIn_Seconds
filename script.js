setTimeout(function(){
    window.location.reload(1);
 }, 1000);
let currDate = new Date();
console.log(currDate);
let nextYearDate = new Date(currDate.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
console.log(nextYearDate);
let diff = nextYearDate - currDate;
console.log(diff/1000/60/60/24);
document.getElementById("seconds").innerHTML = Math.round(diff/1000);