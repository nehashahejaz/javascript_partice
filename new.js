
//▬▬▬▬▬▬▬▬▬chapter no 21 to 25▬▬▬▬▬▬▬▬▬

// QNO1:Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.


// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your Lastname name");

// var fullname = firstname + lastname;
// document.write("Hello "+" "+fullname);


// QNO2:Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


// var mob = prompt("Enter your Favourite mobile Model");
// var lenghtt= mob.length;
//  document.write(mob+"<br>")
//  document.write("lenght of user input"+lenghtt);


// QNO3:Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .



// var word = "  pakistani";
// var firstChar = word.indexOf("n");
// document.write( "index of n "+firstChar);


// QNO4Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var word= "Hello World"
// var lastletter = word.lastIndexOf("l");
// document.write("last Index of l "+lastletter);

// QNO5Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var word = "PAKISTANI";
// var find = word.charAt(3);
// document.write("3rd Index is " +find);

// qno6:6. Repeat Q1 using string concat() method.

// var firstname=window.prompt("enter first name: ");
// var lastname=window.prompt("enter last name: ");

// var b = firstname.slice(0,1);
// var c=firstname.slice(1)
// var d = lastname.slice(0);



// b =b.toUpperCase();
// c=c.toLowerCase();

// d=d.toLowerCase();
// var e=b.concat(c,d);
// document.write(e);
// qno7Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// var word ="Hyderabad";
// document.write(word+ "<br>");
// var replace = word.replace("Hyder", "Islam");

// document.write("replace word " + replace);


// qno8:Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var sentecte= "Ali and Sami are best friends. They play cricket and football together";
// document.write(sentecte+ "<br>");


// var replace=   sentecte.replace(/and/g, "&");

// document.write(replace+ "<br>");

// qno9:Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.



// var stringg= "472"
// document.write("472 is " +typeof stringg +"<br>");

// var intger=Number(stringg)


// document.write("472 is " +typeof intger +"<br>");
// qno12:Write a program that takes user input. Convert and
// show the input in capital letters.




// var user= prompt("enter your name ");
// var upper= user.toUpperCase();
// document.write(upper);





// QNO11:Write a program that takes user input. Convert and
// show the input in title case.

//  var user= prompt("enter your string ");
// var fist= user.charAt(0);
// var second= user.slice(1)
// var upper =fist.toUpperCase();

// document.write(upper+second)


// qno12:Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 50.36 ;
// document.write(num+"<br>")
// var rouned= Math.round(num);
// document.write(rouned)

// qno13:Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@

//  var username= prompt("enter your username");
//  for (var i = 0; i < username.length; i++) {


//     if(username.charAt(i) === '!'){

//         alert("Invalid username")
//     }
//    if(username.charAt(i) === '@'){
//         alert("Invalid username") 


//     }
//      if(username.charAt(i) === '.'){
//         alert("Invalid username") 
//     }
//    if(username.charAt(i) === ','){
//         alert("Invalid user")
//     }
//     else{
//         alert(" valid username")
//      }
  
//  }


//  qno14You have an array
//  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//  Write a program to enable “search by user input” in an
//  array. After searching, prompt the user whether the given
//  item is found in the list or not.
//  Note: Perform case insensitive search. Whether the user
//  enters cookie, Cookie, COOKIE or coOkIE, program
//  should inform about its availability. Example::
 
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'chips'];
// var dish = prompt("WELOME TO MY BAKERY what do you want to order");
// var dish = dish.slice(0);
//  var c =dish.toLowerCase();
// if(c === A[0]){

//     document.write("cake is available at  index 0 in our bakery")
// }
// else if(c === A[1]){

//     document.write(" apple pie is available at  index 1 in our bakery")
// }
// else if(c === A[2]){

//     document.write("cookie is available at  index 2 in our bakery")
// }
// else if(c === A[3]){

//     document.write("chips is available at  index 3 in our bakery")
// }
// else if(c === A[4]){

//     document.write("chips is available at  index 4 in our bakery")
// }
// else{

//     document.write( c +" is not available at   our bakery sorry")
// }



// qno15:Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// var password = prompt("Enter a Password");
// var c= password.slice(0,1);


// if(password.match(/[a-z]/) &&password.match(/[0-9]/)){
//     if(c != 1 && c != 2 && c != 3 && c != 4 && c != 5 && c != 6 && c != 7 && c != 8 && c != 9 ){

// if( password.length>6){
//     alert("valid passoword")
     
// }
// else{
//     alert("passowrd must at least 6 characters long ");
// }

//     }
//     else{
//         alert("passowrd should not start with a number ");
    
//     }}
//     else{
//       alert("passowrd should contain alphabets and numbers \n invalid password")
//     }

// qno16:Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// var university = "University of Karachi";
// for( var i=0 ; i<university.length; i++){
//     var character = university.split('');
 
//     document.write(character[i]);
//     document.write("<br>");
// }


// qno17:Write a program to display the last character of a user
// input.


// var input=prompt("enter string");
// var last= input.slice(-1)
// document.write("string : " +input)
// document.write("<br>"+"last char is"+" " +last)

// qno18:You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// var s ="The quick brown fox jumps over the lazy dog";
// var countstring= s.Equals('the');
// document.write(countstring);
//▬▬▬▬▬▬▬▬▬chapter no 26 to 30▬▬▬▬▬▬▬▬▬

// qno1:Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var number = prompt("enter postive number");
// var roun= Math.round(number);
// var floor= Math.floor(number);
// var ceil= Math.ceil(number);
// document.write("round is "+roun+"<br>");
// document.write("floor is "+floor+"<br>");
// document.write("Ceil is "+ceil+"<br>");



// qno2:Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var number = prompt("enter negtive number");
//  var roun= Math.round(number);
//  var floor= Math.floor(number);
//  var ceil= Math.ceil(number);
//  document.write("round is "+roun+"<br>");
//   document.write("floor is "+floor+"<br>");
//  document.write("Ceil is "+ceil+"<br>");


// qno3:Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num = prompt("enter  number");

// var aboulateno = Math.abs(num);
// document.write(". absolute value is "+aboulateno+"<br>");


// qn4:Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var deice= Math.random()*9;
// var roun = Math.round(deice)
// document.write("your deice number is " + roun)


// qno5:Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

//  var deice= Math.random()*2;
//  var roun = Math.round(deice)

//  if(roun == 1){
//     document.write("Random coin value is Head "  );
//  }
//  else{
//     document.write("Random coin value is Tails  "  ); 
//  }

// QNO6:Write a program that shows a random number between 1
// and 100 in your browser.

// var no= Math.random()*100;
//   var roun = Math.round(no)
//   document.write("Random number between 1 and 100  is :"+roun)

// qno7:Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var a = prompt("enter your weight in killograms")
// var c= parseFloat(a)
// document.write("the weight of user is "+c+"killograms")


// qno8:Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var secret= 6;
// var input= prompt("guess the no between 1 to 10 ");
// if( input == secret);
// {
//     alert(" congratulate the user the serect no is " +secret);

// }
// else{
//     alert("sorry the user the serect no is " +secret);
// }

