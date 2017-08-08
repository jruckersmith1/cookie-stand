var pdxAirport = {
minCust: 23,
maxCust: 65,
AvgCookieSales: 6.3,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 12; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.min;
    avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
},
addToDom: function () {
    var displayNum = document.getElementById( 'pdxAirport' );
    var item = document.createElement ( 'li' );
    item.innerHTML = '6am: 16 cookies';
    displayNum.appendChild(item);
}
}
waterfront.addToDom();


var pioneerSquare = {
minCust: 3,
maxCust: 24,
AvgCookieSales: 1.2,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 12; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.min;
     avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
},
addToDom: function () {
    var displayNum = document.getElementById( 'pioneerSquare' );
    var item = document.createElement ( 'li' );
    item.innerHTML = '6am: 16 cookies';
    displayNum.appendChild(item);
}
}
waterfront.addToDom();


var powells = {
minCust: 11,
maxCust: 38,
AvgCookieSales: 3.7,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 12; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.min;
    avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
},
addToDom: function () {
    var displayNum = document.getElementById( 'powells' );
    var item = document.createElement ( 'li' );
    item.innerHTML = '6am: 16 cookies';
    displayNum.appendChild(item);
}
}
waterfront.addToDom();


var stJohns = {
minCust: 20,
maxCust: 38,
AvgCookieSales: 2.3,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 12; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.min;
    avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
  },
addToDom: function () {
    var displayNum = document.getElementById( 'stJohns' );
    var item = document.createElement ( 'li' );
    item.innerHTML = '6am: 16 cookies';
    displayNum.appendChild(item);
}
}
waterfront.addToDom();


var waterfront = {
minCust: 2,
maxCust: 16,
avgCookieSales: 4.6,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 12; i++) {
      var avgNumber = (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.min * this.avgCookieSales));
    avgHour.push(avgNumber);
 }
this.cookiesPerHour = avgHour;
},
addToDom: function () {
    var displayNum = document.getElementById( 'waterfront' );
    var item = document.createElement ( 'li' );
    item.innerHTML = '6am: 16 cookies';
    displayNum.appendChild(item);
}
}
waterfront.addToDom();