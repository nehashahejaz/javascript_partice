//▬▬▬▬▬▬▬▬▬chapter no 30 to 34▬▬▬▬▬▬▬▬▬

// QNO1:Write a program that displays current date and time in
// your browser.
//   var date= new Date()
//   document.write(date +"<br>");
// qno2:Write a program that alerts the current month in words.
// For example December.
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// var d = new Date();
// var  day = days[d.getDay()];
// document.write(day +"<br>");


// qno3Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// var d = new Date();
//  var  day = days[d.getDay()];
// var today= day.slice(0,3);
// alert("Today is"+today);

// qno4:Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var  days= new Date();
// var today= days.getDay();


// if( today == 0  ||  today == 6 ){
//     alert("its fun day");
// }
// else {
//     alert("working day");
// }


// qno5:Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var  days= new Date();
// var date =  days.getDate();
// if(date =>15 ){
//     alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");  
// }


// qno6:Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var d= new Date();

// document.write("today : "+ d+"<br>")
// var ms= d.getTime()
// document.write("ellapsed millisecond "+ ms+"<br>")
// var mn= (ms/60000)
// document.write("ellapsed minutes "+ mn)


// qno7Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }


// qno8:Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// var month = 11; // January
// var laterdate = new Date(2022, month + 1, 0);
// document.write("later date"+laterdate);


// qno9 Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var num1=new Date(2022,3,2);
//  var num2=new Date();
//  sdr=num1.getTime();
//  edr=num2.getTime();
//  var num=Math.floor(((edr-sdr) / (1000 * 60 * 60 * 24)));
//  document.write(num+" days have passed since "+num1);

//  qno10:Write a program that displays in your browser the
//  seconds that elapsed between the reference date and the
//  beginning of 2015.

// var num1=new Date(2022,0,1);
//  var num1c=num1.getTime();
//  var num2=new Date();
// var num2c=num2.getTime();
//  var diff=num2c-num1c;
// var secPassed=Math.floor((diff/1000));
//  document.write("On reference date "+num1+"  "+secPassed+" seconds  "+" had passed since beginning of 2020");


// qno11Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


// var currentDate=new Date();
//  var getHours=currentDate.getTime();
// var currentTime=Math.floor(getHours/(1000*60*60));
// var getHours=getHours+(1000*60*60);
//  var incrementedTime=Math.floor(getHours/(1000*60*60));
//  var diff=incrementedTime-currentTime;
// diff--;
//  var newDate=new Date();
// newDate.setHours(diff);
//  document.write("Current date: "+currentDate+"<br>"+"One hour ahead it will be: "+newDate);

// qno12:Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var date = new Date()
//  var currentYear=date.getFullYear();
//  var YearBack100=currentYear-100;
//  var YearBack100Date=new Date();
//  YearBack100Date.setFullYear(YearBack100);
//  alert("Current Date:"+date+"\n"+"100 years back"+YearBack100Date);

// qno13:Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


// var age=prompt("Enter your age?");
// age=parseInt(age);
//  var date=new Date();
//  var currentYear=date.getFullYear();
//  var HisAge=currentYear-age;
//  var dateofBirth=new Date(HisAge);
//  var yearDate=dateofBirth.setFullYear(HisAge);
//  var YearOfdateofBirth=dateofBirth.getFullYear();
//  document.write("Your age is: "+HisAge+"<br>"+"Year of date of birth is: "+YearOfdateofBirth);


// qno14:Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// var name=prompt("Enter your name?");
// var month=prompt("Enter the month?");
// var units=prompt(name+" Please! Enter the units consumed in the month of "+month+"?");
// units=parseFloat(units);
// var chargesPerUnit=prompt(name+" Please enter the charges per unit?");
// chargesPerUnit=parseFloat(chargesPerUnit);

// var netAmountPayable=units*chargesPerUnit;
// var NetAmountPayable=netAmountPayable.toFixed(2);
// var LatePaymentSurcharge=(10/100)*NetAmountPayable;
// var latePaymentSurcharge=LatePaymentSurcharge.toFixed(2);
// var GrossAmountPayable=netAmountPayable+LatePaymentSurcharge;
// GrossAmountPayable=GrossAmountPayable.toFixed(2);

// var finalUnits=units.toFixed(2); 
// var finalChargesPerUnit=chargesPerUnit.toFixed(2);

// document.write("Customer Name: "+name+"<br>"+"Month: "+month+"<br>"+"Number of units: "
// +finalUnits+"<br>"+"Charges per unit: "+finalChargesPerUnit+"<br><br><br>"+"Net Amount"+
// "Payable (within due date) :"+NetAmountPayable+"<br>LatePaymentSurcharge :"+latePaymentSurcharge+
// "<br>Gross Amount Payable (After due date): "+GrossAmountPayable);

//▬▬▬▬▬▬▬▬▬chapter no 35 to 38▬▬▬▬▬▬▬▬▬

// qno 1 :Write a function that displays current date & time in your
// browser.

// function currentdate(){
//     var date = new Date();
//     var cureentdate = date.getDate()
//     var time = date.getTime()
 
//     document.write("date: "+date);
//       document.write("curentdate: "+cureentdate);
//       document.write("time: "+time);

// }
// currentdate();


// qno2 Write a function that takes first & last name and then it
// greets the user using his full name.


// function greeting(){

//     var fist= prompt("enter your first name");
//     var last= prompt("enter your last name");
//     var say= "hello"
//     alert(say  + fist  + last);
// }
// greeting();

// qno3:Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.


// function sum(){
//     var no1= +prompt("enter your first no");
//     var no2= +prompt("enter your last no");
//     var add= no1 + no2;
//     document.write(add);



// }
// sum();


// qno4Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function Calculator(){
//     var no1= +prompt("enter your first no");
//          var no2= +prompt("enter your second no");
//          var opr = prompt("enter opr  x/+-");
//          if( opr == 'x'){
//              var multi = no1 * no2;
//              document.write(multi);

//          }
//          else if( opr == '/'){
//             var divide = no1 / no2;
//             document.write(divide);

//         }
//         else if( opr == '+'){
//             var add = no1 + no2;
//             document.write(add);

//         }
//         else if( opr == '-'){
//             var sub = no1 - no2;
//             document.write(sub);

//         }
//         else{
//             document.write("wrong opretor");

//         }
      


// }
// Calculator();

// qno5 Write a function that squares its argument.


// function square(){
//     var num= +prompt("enter your  no");
//     var squares = num * num;
//     document.write(num +" square is: "+ squares);

// }
// square();

// qno6:Write a function that computes factorial of a number.

// var fact=prompt("Enter a number to find its factorial?");
//  var result=factorial(fact);
//  document.write("The factorial of "+fact+" is = "+result);
//  function factorial(n)
//  { 
//      n=parseInt(n);
//      var fact=1;
//     for(var i=1;i<=n;i++)
//      {
//          var result=fact*(n-i);
//          var fact=fact+result;
//     }
//      return fact;
//  }
//  factorial();

// qn7:Write a function that take start and end number as inputs
// & display counting in your browser.


// function num(){
//     var start= +prompt("starting no");
//     var end =  +prompt("end no");
//     for(i=start ; i <= end ; i++){
//         document.write (i);
//         document.write("<br>");
//     }




// }
// num();


// qno8:Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function hypotenuse(){
//     var base= +prompt("base ");
//     var per= +prompt(" prependicular");
//     var base2= (base * base);
//     var per2 = per * per;
//     var hyp2 = base2 +  per2;
// var hyp = Math.sqrt(hyp2) ;
// document.write (" hypotenuse of aright angle is  " + hyp);

// }
// hypotenuse();

// qno9:Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

// var w=prompt("Enter the width of rectangle");
// var h=prompt("Enter the height of rectangle");
// var result=Area(w,h);
// document.write("The area of rectangle is: "+result);
//  function Area(w,h)
//  {
//      w=parseFloat(w);
//      h=parseFloat(h)
//      var a=w*h;
//      return a;
//  }

//  Area();


// qno10:Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.


// var s=prompt("Enter the string to check for palindrome");
// palindrome(s);
// function palindrome(s)
// {
//     var spl;
//     spl=s.split("").reverse().join("");
//     if(s===spl)
//     {
//         alert(s+" is a palindrome");
//     }
//     else{
//         alert(s+" is not a palindrome");
//     }
// }

// qno11 Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function upper(){
//     var st = prompt("enter your string");
//     var frist = st.slice(0,1);
//     var last = st.slice(1)
//     var uppercase= frist.toUpperCase();
//     var res= uppercase+last;
//     document.write(res);

// }
// upper();


// qno12:Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// var string = prompt("ener string");
// var strr=largest(string);
//  document.write("The longest word is: "+strr);
// function largest(string){

   
//     var strSplit = string.split(' ');
//         var largestword = 0;
//          for(var i = 0; i < strSplit.length; i++){
//           if(strSplit[i].length >  largestword){
//                    largestword = strSplit[i].length;
//                     }
//                 }
//                 return largestword;
         
// }
// largest();

// qno13:Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of


// var str=prompt("Enter str");
// var letter=prompt("Enter letter");
// var res=char_count(str,letter);
// document.write(letter+" is "+res+" times");
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// char_count();


// qno14:Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2


//var radius=prompt("Enter the radius");
// radius=parseInt(radius);
// calcCircumference(radius);
// calcArea(radius);
// function calcCircumference(radius)
// {
//     var c=2*(3.14)*radius;
//     document.write("The crcumference is: "+c+"<br>");
// }
// function calcArea(radius)
// {
//     var a=(3.14*radius*radius);
//     document.write("The radius is: "+a);
// }

//calcCircumference();


