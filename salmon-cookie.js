var hourCookCount = [ '6am:', '7am', '8am:', '9am:', '10am:', '11am:', '12pm', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];

var pdxAirport = {
minCust: 23,
maxCust: 65,
AvgCookieSales: 6.3,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 14; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.min;
    avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
},
addToDom: function () {
   var displayNum = document.getElementById( 'pdxAirport' );
    this.random();
    for (var i = 0; i < hourCookCount.length; i++) {
      var item = document.createElement ( 'li' );
    item.innerHTML = hourCookCount[i];
    displayNum.appendChild(item);
    console.log(this.cookiesPerHour);
    item.innerHTML = hourCookCount[i] + this.cookiesPerHour[i];
}
pdxAirport.addToDom();


var pioneerSquare = {
minCust: 3,
maxCust: 24,
AvgCookieSales: 1.2,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 14; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.min;
     avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
},
addToDom: function () {
    var displayNum = document.getElementById( 'pioneerSquare' );
    this.random();
    for (var i = 0; i < hourCookCount.length; i++) {
      var item = document.createElement ( 'li' );
    item.innerHTML = hourCookCount[i];
    displayNum.appendChild(item);
    console.log(this.cookiesPerHour);
    item.innerHTML = hourCookCount[i] + this.cookiesPerHour[i];
}
}
}
pioneerSquare.addToDom();


var powells = {
minCust: 11,
maxCust: 38,
AvgCookieSales: 3.7,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 14; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.min;
    avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
},
addToDom: function () {
    var displayNum = document.getElementById( 'powells' );
    var item = document.createElement ( 'li' );
    item.innerHTML = hourCookCount;
    displayNum.appendChild(item);
}
}
powells.addToDom();


var stJohns = {
minCust: 20,
maxCust: 38,
AvgCookieSales: 2.3,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 14; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.min;
    avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
  },
addToDom: function () {
    var displayNum = document.getElementById( 'stJohns' );
    this.random();
    for (var i = 0; i < hourCookCount.length; i++) {
      var item = document.createElement ( 'li' );
    item.innerHTML = hourCookCount[i];
    displayNum.appendChild(item);
    console.log(this.cookiesPerHour);
    item.innerHTML = hourCookCount[i] + this.cookiesPerHour[i];
}

stJohns.addToDom();


var waterfront = {
minCust: 2,
maxCust: 16,
avgCookieSales: 4.6,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 14; i++) {
      var avgNumber = (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.min * this.avgCookieSales));
    avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
},
addToDom: function () {
    
   var displayNum = document.getElementById( 'waterfront' );
    this.random();
    for (var i = 0; i < hourCookCount.length; i++) {
      var item = document.createElement ( 'li' );
    item.innerHTML = hourCookCount[i];
    displayNum.appendChild(item);
    console.log(this.cookiesPerHour);
    item.innerHTML = hourCookCount[i] + this.cookiesPerHour[i];
}

waterfront.addToDom()