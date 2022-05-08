//▬▬▬▬▬▬▬▬▬ chapter no 9 to 11 ▬▬▬▬▬▬▬▬▬

//USER INPUT & CONDITIONALSTATEMENT

// QNO1:Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city = prompt("enter a city name");

// if(city == "karachi"){
//     document.write("welcome to city of light")
// }

// QNO2:Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your gender");
// if(gender == "male"){
//     document.write(" Good moring sir");

// }
// if(gender=="female"){
//     document.write(" Good moring Ma'am");


// }


//QNO3:Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
//  var trafic = prompt("Enter your Signal colour");
//  if(trafic == "red"){
//      document.write("Must Stop");

// }
//  if(trafic =="yellow"){
//      document.write("Ready to move");
// }
//  if(trafic =="green"){
//          document.write("Move now");
// }


// QNO4:Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”




// var fuel = +prompt("Enter FEUL IN LITER");
// if( fuel < 0.25){
//     document.write("Please refill the fuel in your car");
// }
// qno6:Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//  var a = 4;
//  if (++a === 5){
//  alert("given condition for variable a is true");
//  }

//  var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
//  }
//  var c = 12;
//  if (c++ === 13){
//  alert("condition 1 is true");
//  }
//  if (c === 13){
//  alert("condition 2 is true");
//  }
// if (++c < 14){
//  alert("condition 3 is true");
//  }
//  if(c === 14){
//  alert("condition 4 is true");
//  }
//  var materialCost = 20000;
//  var laborCost = 2000;
//  var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
//  }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
//  }

//  if("car" < "cat"){
//  alert("car is smaller than cat");
//  }

// // qno6. Write a program to take input the marks obtained in three
// // subjects & total marks. Compute & show the resulting
// // percentage on your page. Take percentage & compute
// // grade as per following table:



// var math = +prompt("enter a maths no");
// var comp = +prompt("enter a computer no");
// var science =+prompt("enter a science no");
// var add= math + comp+science;
// var total = 300;
// var percentage  = (add/total)*100;

// if(percentage >= 80){
//     document.write("Total Marks:"+total+"<br>");
//    document.write("Obatined Marks:"+add+"<br>");
//   document.write("percentage :"+percentage+"<br>");
//       document.write("Grade:Aone<br>");
//       document.write("Remarks:Excellent<br>");

// }

// if(percentage >= 70){
//     document.write("Total Marks:"+total+"<br>");
//    document.write("Obatined Marks:"+add+"<br>");
//   document.write("percentage :"+percentage+"<br>");
//       document.write("Grade:A<br>");
//       document.write("Remarks:Good<br>");

// }

// if(percentage >= 60){
//     document.write("Total Marks:"+total+"<br>");
//    document.write("Obatined Marks:"+add+"<br>");
//   document.write("percentage :"+percentage+"<br>");
//       document.write("Grade:B<br>");
//       document.write("Remarks:You need to improve<br>");

// }

// if(percentage < 60){
//     document.write("Total Marks:"+total+"<br>");
//    document.write("Obatined Marks:"+add+"<br>");
//   document.write("percentage :"+percentage+"<br>");
//       document.write("Grade:Fail<br>");
//       document.write("Remarks:sorry<br>");

// }
// QNO7:Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var guess = prompt("enter a no b/w 1 to 10");
// var secret = 5;
// if(guess == secret){
//     document.write("Bingo! Correct answer");
// }
// if(guess == secret +1){
//     document.write("enough to the correct answer");
// }
// QNO8Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var no = +prompt("enter a no");
// var total = no%3;
// if(total == 0){
//     document.write("number is divisible by 3");
// }


// qno9:Write a program that checks whether the given input is an
// even number or an odd number.


// var no = +prompt("enter a no");
// var total = no%2;
// if(total == 0){
//     document.write("number is even");

// }
// else{
//     document.write("number is odd");
// }
// qno10:Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var t = prompt("enter a temperature");
// if(t > 40){
//     document.write("It is too hot outside");
// }

// else if(t > 30){
//     document.write("The Weather today is Normal.");
// }
// else if(t > 20){
//     document.write("Today’s Weather is cool");
// }
// else if(t > 10){
//     document.write("OMG! Today’s weather is so Cool");
// }
// qno11:Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
 

// var no1 = +prompt("enter a First no");
// var no2 = +prompt("enter a Second no");
// var opr = prompt("enter a opr +,-,*,/ &%");
// var sub = no1-no2;
// if( opr == "+"){
//     var add = no1 + no2;
//     document.write("value is"+add);
// }
// else if( opr == "-"){
   
//     document.write("value is"+sub);
// }
// else if( opr == "*"){
//     var multi = no1+no2;
//     document.write("value is"+multi);
// }
// else if( opr == "/"){
//     var devide = no1/no2;
//     document.write("value is"+devide);
// }
// else if( opr == "%"){
//     var mod = no1 % no2;
//     document.write("value is"+mod);
// }

//▬▬▬▬▬▬▬▬▬ chapter no 12 to 13 ▬▬▬▬▬▬▬▬▬
//IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS


// QNO1Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).



// var letter = prompt("enter letter");
// if(letter.toUpperCase() === letter){
//     document.write("upper case")
// }
// else if(letter.toLowerCase() === letter){
//     document.write("lower case");

// }
// Qno2:Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var no = +prompt("enter no");

// var no2= +prompt("enter no2");

// if( no > no2){
//     document.write("show largest no "+no);
// }
//  else if( no < no2){
//     document.write("show largest no "+no2);
// }
//  else if( no ==  no2){
//     document.write("show equal no "+no);
// }

// Qno3Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var no = +prompt("enter no");

// if (no > 0){
//     document.write(" Postive no "+no);
// }
// else if (no < 0){
//     document.write(" Negtive no "+no);
// }
// else{
//     document.write(" zero "+no);
// }
// qno4:Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// var char = prompt("enter character");
// if(char == "a" ||char == "e" ||char == "i"||char == "0" ||char == "u")
// {
//     document.write("true");
// }
// else{
//     document.write("false")
// }
// qno5:Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var password ="neha123";
// var pass = prompt("enter you password");
// var pass2 = prompt("enter you password");
// if(password == pass && password ==pass2){
//     document.write("Your password is correct");
// }
// else{
//     document.write("wrong password");
// }
// qno6:This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var hour = 13;
// if (hour >18){
//     document.write("Good day");
    
// }
// else{
//     document.write("Good evening ");
// }

//▬▬▬▬▬▬▬▬▬ chapter no 14 to 16 ▬▬▬▬▬▬▬▬▬

//array
// qno1:Declare an empty array using JS literal notation to store
// student names in future.
// 2. Declare an empty array using JS object notation to store
// student names in future.
// 3. Declare and initialize a strings array.
// 4. Declare and initialize a numbers array.
// 5. Declare and initialize a boolean array.
// 6. Declare and initialize a mixed array.
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var stu_names=[];
// var string =["abc","bvdf","cff","dff <br>"];
// document.write(string)
// var no =[1,2,3,4,5,6,7,8,9+"<br>"]
// document.write(no)
// var boolean =["true","false"+"<br>"]
// document.write(boolean)

// var mixed =["true","false","name","class",1,2,3+"<br>"]
// document.write(mixed)

// var quli = ["SSC<br>","HSC<br>"," BCS<br>","BS<br>","BCOM<br>","BCOM<br>","MS<br>"," M. Phil<br>","PHD<br>"]
// document.write(quli)

// qno8:Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// var stu_name=["amna","fiza","nelum"];
// var scro=[300,400,200];
// var total= 500;



// qno9:Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colour =["blue","black","red","green"]
// var beg = prompt("wanst to addcolor in beginning array");
// var end = prompt("wanst to add color in end  of array");
// if(beg == "y"){
//     var begg = prompt("enter color");
//     colour.unshift(begg);
//     document.write(colour);
// }
// if(end == "y"){
//     var begg = prompt("enter color");
//     colour.push(begg);
//     document.write(colour);
// }
// var delf = colour.shift()
// document.write(delf)
//  document.write("<br>update value"+colour)

// var del = colour.pop()
// document.write(del)
// document.write("<br>update value"+colour)

// qno10 Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// // method.

// var rearrange=[2,5,8,4,8,1,9,7]
// // var ass =rearrange.sort();
// // document.write(ass)
// var des=rearrange.reverse()
// document.write(des)




// qno12Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// var arr = ["This ", " is ", " my ", " cat"];
// var str= arr.join('');
// document.write(str)


// ▬▬▬▬▬▬▬▬▬ chapter no 17 to 29▬▬▬▬▬▬▬▬▬

// qno1:Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var namee = [
//     ['neha', 9],
//     ['aishi', 1],
//     ['eman', 2],
//     ['maria', 1],
//     ['amna', 7]
// ];
// document.write(namee)
// qno3Write a program to print numeric counting from 1 to 10.
// for (var a = 1; a <= 10; a++){
//     document.write(a+'<br>')
// }

// qn04Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// var num =prompt("first_num");
// var s_num = prompt("leng number");
// for(i=1; i<=s_num; i++){
//     document.write( num+"*"+ i+ "="+(num*i)+'<br>');
//  }

