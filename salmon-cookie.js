
function Store ( name, minCust, maxCust, avgCookieSales, id ) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.avgHour = [];
  // this.openHours = [ '6am:', '7am', '8am:', '9am:', '10am:', '11am:', '12pm', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:' ];
  this.id = id;
  this.customersPerHour();
  this.addToDom();
}


Store.prototype.customersPerHour = function () {
  
      for (var i = 0; i < 15; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      avgNumber = Math.floor(avgNumber * this.avgCookieSales);
      this.avgHour.push(avgNumber);
 }
    // console.log(this.avgHour);
this.cookiesPerHour = this.avgHour;
}


Store.prototype.addToDom = function () {
  console.log(this.id);
   var displayNum = document.getElementsByTagName( 'tbody' )[0];
   var newRow = document.createElement ( 'tr' );
   var storeName = document.createElement ( 'td' );
   storeName.innerHTML = this.name;
   newRow.appendChild(storeName);
   displayNum.appendChild(newRow);
    for (var i = 0; i < this.avgHour.length; i++) {
      var item = document.createElement ( 'td' );
    item.innerHTML = this.avgHour[i];
    newRow.appendChild(item);
    // console.log(this.cookiesPerHour);
    // item.innerHTML = this.openHours[i] + this.cookiesPerHour[i];
}
}  
var pdxAirport = new Store( 'PDX Airport', 23, 65, 6.3, 'pdxAirport' );

// pdxAirport.customersPerHour();
// pdxAirport.addToDom();

var pioneerSquare = new Store( 'Pioneer Square', 3, 24, 1.2, 'pioneerSquare' );
var powells = new Store( 'Powell\'s', 11, 38, 3.7, 'powells' );
var stJohns = new Store( 'St. John\'s', 20, 38, 2.3, 'stJohns' );
var waterfront = new Store( 'Waterfront', 2, 16, 4.6, 'waterfront');



/*
var hourCookCount = [ '6am:', '7am', '8am:', '9am:', '10am:', '11am:', '12pm', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];

var pdxAirport = {
    minCust: 23,
    maxCust: 65,
    avgCookieSales: 6.3,
    openHours: [ '6am:', '7am', '8am:', '9am:', '10am:', '11am:', '12pm', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:' ], 

customersPerHour: function (){
    var avgHour = [];
      for (var i = 0; i < 15; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      avgHour.push(avgNumber);
 }
    console.log(avgHour);
this.cookiesPerHour = avgHour;
},
addToDom: function () {
   var displayNum = document.getElementById( 'pdxAirport' );
    for (var i = 0; i < hourCookCount.length; i++) {
      var item = document.createElement ( 'li' );
    item.innerHTML = hourCookCount[i];
    displayNum.appendChild(item);
    console.log(this.cookiesPerHour);
    item.innerHTML = hourCookCount[i] + this.cookiesPerHour[i];
}
}
}
pdxAirport.customersPerHour();
pdxAirport.addToDom();


var pioneerSquare = {
    minCust: 3,
    maxCust: 24,
    avgCookieSales: 1.2,
    openHours: [ '6am:', '7am', '8am:', '9am:', '10am:', '11am:', '12pm', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'],

    customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 14; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
},
addToDom: function () {
   var displayNum = document.getElementById( 'pioneerSquare' );
    for (var i = 0; i < hourCookCount.length; i++) {
      var item = document.createElement ( 'li' );
    item.innerHTML = hourCookCount[i];
    displayNum.appendChild(item);
    console.log(this.cookiesPerHour);
    item.innerHTML = hourCookCount[i] + this.cookiesPerHour[i];
}
}
}
pioneerSquare.customersPerHour();
pioneerSquare.addToDom();


var powells = {
    minCust: 11,
    maxCust: 38,
    avgCookieSales: 3.7,
    openHours: [ '6am:', '7am', '8am:', '9am:', '10am:', '11am:', '12pm', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'],

    customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 14; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
},
addToDom: function () {
   var displayNum = document.getElementById( 'powells' );
    for (var i = 0; i < hourCookCount.length; i++) {
      var item = document.createElement ( 'li' );
    item.innerHTML = hourCookCount[i];
    displayNum.appendChild(item);
    console.log(this.cookiesPerHour);
    item.innerHTML = hourCookCount[i] + this.cookiesPerHour[i];
}
}
}
powells.customersPerHour();
powells.addToDom();


var stJohns = {
    minCust: 20,
    maxCust: 38,
    avgCookieSales: 2.3,
    openHours: [ '6am:', '7am', '8am:', '9am:', '10am:', '11am:', '12pm', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'],

    customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 14; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
  },
addToDom: function () {
    var displayNum = document.getElementById( 'stJohns' );
    for (var i = 0; i < hourCookCount.length; i++) {
      var item = document.createElement ( 'li' );
    item.innerHTML = hourCookCount[i];
    displayNum.appendChild(item);
    console.log(this.cookiesPerHour);
    item.innerHTML = hourCookCount[i] + this.cookiesPerHour[i];
}
}
}
stJohns.customersPerHour();
stJohns.addToDom();


var waterfront = {
    minCust: 2,
    maxCust: 16,
    avgCookieSales: 4.6,
    openHours: [ '6am:', '7am', '8am:', '9am:', '10am:', '11am:', '12pm', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'],

    customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 14; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust; this.avgCookieSales;
    avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
},
addToDom: function () {
    
   var displayNum = document.getElementById( 'waterfront' );
    for (var i = 0; i < hourCookCount.length; i++) {
      var item = document.createElement ( 'li' );
    item.innerHTML = hourCookCount[i];
    displayNum.appendChild(item);
    console.log(this.cookiesPerHour);
    item.innerHTML = hourCookCount[i] + this.cookiesPerHour[i];
}
}
}
waterfront.customersPerHour();
waterfront.addToDom();
*/