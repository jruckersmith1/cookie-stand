var salesByHour = [];
var storz = [];

function Store ( name, minCust, maxCust, avgCookieSales, id ) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.avgHour = [];
  this.id = id;
  this.customersPerHour();
  this.addToDom();
  this.pushArr();
};
Store.prototype.pushArr = function () {
    storz.push(this);

}

Store.prototype.customersPerHour = function () {
  
      for ( var i = 0; i < 15; i++ ) {
      var avgNumber = Math.floor(Math.random() * ( this.maxCust - this.minCust )) + this.minCust;
      avgNumber = Math.floor( avgNumber * this.avgCookieSales );
      this.avgHour.push( avgNumber );
 }
this.cookiesPerHour = this.avgHour;
}

Store.prototype.addToDom = function () {
  console.log( this.id );
   var displayNum = document.getElementsByTagName( 'tbody' )[0];
   var newRow = document.createElement ( 'tr' );
   var storeName = document.createElement ( 'td' );
   storeName.innerHTML = this.name;
   newRow.appendChild( storeName );
   displayNum.appendChild( newRow );
   var count2 = 0;

    for (var i = 0; i < this.avgHour.length; i++ ) {
      var item = document.createElement ( 'td' );
    item.innerHTML = this.avgHour[ i ];
    newRow.appendChild( item );
    count2 += this.avgHour[i];
}
  var totalz = document.createElement( 'td' );
  totalz.innerHTML = count2;
  newRow.appendChild(totalz);
  }

function totalTotal() {
  var count3 = 0;
  for ( var j = 0; j < 15; j++ ){
    var count = 0;
    for ( var i = 0; i < storz.length; i++ ) {
      count += storz[i].avgHour[j];
    }
    salesByHour.push(count);
    count3 += count;
  }
  var row = document.getElementsByTagName( 'tbody' )[0];
  var newRow = document.createElement( 'tr' );
  newRow.setAttribute( 'id', 'total');
  newRow.innerText = 'Total';
  row.appendChild(newRow);

  for( i = 0; i < 15; i++ ) {
    var list = document.getElementById( 'total' );
    var newList = document.createElement( 'td' );
    newList.innerText = salesByHour[i];
    list.appendChild(newList);
  }
    var list = document.getElementById( 'total' );
    var newList = document.createElement( 'td' );
  newList.innerText = count3;
  list.appendChild(newList);
  
  }

 
var pdxAirport = new Store( 'PDX Airport', 23, 65, 6.3, 'pdxAirport' );
var pioneerSquare = new Store( 'Pioneer Square', 3, 24, 1.2, 'pioneerSquare' );
var powells = new Store( 'Powell\'s', 11, 38, 3.7, 'powells' );
var stJohns = new Store( 'St. John\'s', 20, 38, 2.3, 'stJohns' );
var waterfront = new Store( 'Waterfront', 2, 16, 4.6, 'waterfront');

totalTotal();
console.log(storz);
console.log(salesByHour);


// function Question ( question, answer, required ) {
//     this.question = question;
//     this.answer = answer;
//     this.required = required;

//     this.render();
// }

// Question.prototype.render = function () {
//     var questionsList = document.getElementById( 'questions' );
//     var questionLi = document.createElement( 'li' );
//     questionLi.innerText = this.question;
//     if ( this.required ) {
//         questionLi.innerText += '*';
//     }
//     questionsList.appendChild( questionLi );
// }

// var question = new Question( 'What color is JavaScript?', 'yellow', true );
// var question0 = new Question( 'What color is HTML?', 'red', true );
// var question1 = new Question( 'What color is CSS?', 'blue' );

// var form = document.getElementById( 'new-question' );
// form.addEventListener( 'submit', function () {
//     // prevent form submit from redirecting page
//     event.preventDefault();
var form = document.getElementById('new_store');
form.addEventListener( 'submit', function () {
    console.log( 'hello' );
  event.preventDefault();
  var newStore = new Store( this.store_name.value, parseInt(this.min_customers_per_hour.value), parseInt(this.max_customers_per_hour.value), parseInt(this.avg_cookies_sold_per_hour.value) );
console.log( this.store_name.value)
});
