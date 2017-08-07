var pdxAirport = {
minCost: 23,
maxCost: 65,
AvgCookieSales: 6.3,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 12; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCost - this.minCost)) + this.min;
    avgHour.push(avgNumber);
 }
return avgHour;
}
}

var pioneerSquare = {
minCost: 3,
maxCost: 24,
AvgCookieSales: 1.2,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 12; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCost - this.minCost)) + this.min;
     avgHour.push(avgNumber);
 }
return avgHour;
}
}

var powells = {
minCost: 11,
maxCost: 38,
AvgCookieSales: 3.7,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 12; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCost - this.minCost)) + this.min;
    avgHour.push(avgNumber);
 }
return avgHour;
}
}

var stJohns = {
minCost: 20,
maxCost: 38,
AvgCookieSales: 2.3,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 12; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCost - this.minCost)) + this.min;
    avgHour.push(avgNumber);
 }
return avgHour;
  }
}

var waterfront = {
minCost: 2,
maxCost: 16,
AvgCookieSales: 4.6,
customersPerHour: function (){
    var avgHour = [];
    for (var i = 0; i < 12; i++) {
      var avgNumber = Math.floor(Math.random() * (this.maxCost - this.minCost)) + this.min;
    avgHour.push(avgNumber);
 }
return avgHour;
}
}