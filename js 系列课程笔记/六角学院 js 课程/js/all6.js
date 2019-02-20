var myMonth = 6;
var thisMonth = 12;
var birthdayCheck = myMonth == thisMonth;       // 首先计算 myMonth 是否等于 thisMonth, 然后将true 或者 false赋值给 birthdayCheck

document.getElementById('birthdayId').textContent = birthdayCheck;


var nowPeople = 1;
var totalPeople = 2;
var allPeopleNoHereCheck = nowPeople != totalPeople;
console.log(allPeopleNoHereCheck);

document.getElementById('peopleId').textContent = allPeopleNoHereCheck;