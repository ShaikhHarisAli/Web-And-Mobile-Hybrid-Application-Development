// chapter 21-25
// 1 .Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var first_name = prompt("Enter firstname")
// var last_name = prompt("Enter lastname")
// var fullName= first_name +" "+ last_name;
// document.write(fullName)


//2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var phone=prompt("Enter your fav phone")
// document.write("My favorite phone is : "+phone +"<br/>")
// var lenght=phone.length
// document.write("Lenght of string "+lenght)


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

// var name="Pakistani"
// document.write("String :"+name)
// var nameLength=name.length
// document.write("The lenght of Name is "+nameLength+"<br/>")
// var b=name.indexOf("n")
// document.write("Index of n : "+b+"<br/>")

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browse

// var str="Hello World"
// document.write("String : "+ str+"<br/>")
// var indexof=str.lastIndexOf("l")
// document.write("Index of l : "+indexof)

// 5. Write a program to find the character at 3 rd index in the
// word “Pakistani” and display the result in your browser .

// var name="Pakistani"
// document.write("String :"+name)
// var indexof=name.indexOf("i")
// document.write(" <br/> Index of i : "+indexof)
// var character=name.charAt(indexof)
// document.write("<br/> Character at index "+indexof+" : "+character)

// 6. Repeat Q1 using string concat() method.
// 1 .Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var first_name = prompt("Enter firstname")
// var last_name = prompt("Enter lastname")
// var fullName= first_name.concat(last_name)
// document.write(fullName)

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city_name="Hydrabad"
// document.write("City name "+city_name)
// var text=city_name.replace("Hydra","Islam")
// document.write("<br/> After Replacement : "+ text)

//8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”

// var message = "Ali and Sami are best friends. They play cricket and football together"
// var messageChange=message.replace(/and/g,"&")
// document.write(messageChange)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var str="472"
// document.write("String :"+str )
// document.write("<br/> Type : "+typeof(str) )
// var num=+(str)
// document.write("<br/> Number : "+num)
// document.write("<br/> Type : "+typeof(num))


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var input=prompt("Enter the string")
// document.write("User Input : "+input)
// var changeCase=input.toUpperCase()
// document.write("<br/> Upper Case : "+changeCase)

// 11. Write a program that takes user input. Convert and
// show the input in title case

// var input=prompt("Enter the string")
// document.write("User Input : "+input)
// var changeCase=input[0].toUpperCase();
// var changeCase2=input.slice(1).toLowerCase()
// var titleCase=changeCase.concat(changeCase2)
// document.write("<br/> Title Case"+titleCase)


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
// document.write("Number "+num)
// var str=num.toString().replace(".", "");
// document.write("<br/> Result : "+str)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var input=prompt("Enter Username")
// document.write("Lenght of string"+input.length+"<br/>")
// var count=0;
// var flag=false


// for(var i=0;i<input.length;i++){
//     if(input[i] === String.fromCharCode(33) || input[i] === String.fromCharCode(44) || input[i] === String.fromCharCode(46) || input[i] === String.fromCharCode(64) ){
//         alert("Invalid User Name " + input)
//         flag=true
        
//     }
    
// }

// if(flag==false){

//     document.write("Username is correct : "+input)
// }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var input=prompt("Search by user input")
// var flag=-1;
// var A = ["cake","apple pie" , "cookie","chips", "patties"]
// for(var i =0;i<A.length;i++){
//     if(input.toLowerCase()==A[i]){
//         document.write(input.toLowerCase()+" is available at index "+i+" in our bakery" )
//         flag=0
//         break;
//     }
// }
// if(flag=-1)
// {
//     document.write("Item is not Available")
// }

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password=prompt("Enter Password")
// if (password >= String.fromCharCode(48) && password <=String.fromCharCode(51)){
//     document.write("Password cannot began with a number <br/> Enter correct password")
// }
// else if (password>=String.fromCharCode(65) && password <= String.fromCharCode(90) && password.length >= 6 ){
//     document.write("Correct Password")
// }
// else if (password >=String.fromCharCode(97) && password <=String.fromCharCode(122) && password.length >= 6){
//     document.write("Correct Password")
// }
// else{
//     document.write("Incorrect Password")
// }
// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university="University of Karachi"
// var lenght=university.length
// for(var i=0;i<lenght;i++){
//     document.write(university[i]+"<br/>")
// }


//17. Write a program to display the last character of a user input.
// var input=prompt("Enter City")
// document.write("User Input : "+input+"<br/>")
// var lenght=input.length
// document.write("Lenght : "+lenght+"<br/>")
// var input=input.charAt(lenght-1)
// document.write("Last Character of Input : "+input+"<br/>")

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var str="The quick brown fox jumps over the lazy dog"
// document.write(str+"<br/>")
// str =(str.match(/the/gi)).length
// document.write(str)


// Chapter 26-30
// 1.Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number=32.564
// document.write("NUmber = "+number+"<br/>")
// var a=Math.round(number)
// document.write("Round of = "+a+"<br/>")
// var b=Math.floor(number)
// document.write("Floor Value = "+b+"<br/>")
// var c=Math.ceil(number)
// document.write("Ceil Value = "+c+"<br/>")

//2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number=-32.564
// document.write("NUmber = "+number+"<br/>")
// var a=Math.round(number)
// document.write("Round of = "+a+"<br/>")
// var b=Math.floor(number)
// document.write("Floor Value = "+b+"<br/>")
// var c=Math.ceil(number)
// document.write("Ceil Value = "+c+"<br/>")

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number = -4
// var a = Math.abs(number)
// document.write("Absolute value of "+number+" is "+a+"<br/>")
// var number1 = -5
// var  b= Math.abs(number1)
// document.write("Absolute value of "+number1+" is "+b+"<br/>")


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// var a=Math.random()
// var b=Math.random()
// var c=(a*6).toFixed(0)
// var d=(b*6).toFixed(0)
// document.write("Random dice value " +c+"<br/>")
// document.write("Random dice value " +d+"<br/>")


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var a=Math.random()
// var c=(a*2)+1
// var d=Math.floor(c)

// if(d==1){
//     document.write(d+"<br/>")
//     document.write("Random coin value Tail ")
// }
// else{
//     document.write(d+"<br/>")
//     document.write("Random coin value Head ")
// }


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var a=Math.random()
// var c=(a*100)+1
// var d=Math.floor(c)
// document.write("Random number between 1 and 100 : "+d)


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight=parseFloat(prompt("Enter Weight in Kilograms").toString)
// document.write("The weight of the user in kilogram is "+weight+"Kilograms")


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var a=Math.random()
// var c=(a*10)+1
// var randomNum=Math.floor(c)


// var userInput=parseInt(prompt("Enter the number"))

// if (userInput===randomNum){
//     document.write("Congratulaions")
// }
// else{
//     document.write("Try again")
// }

// Chapter 31 to 34 : DATA METHOD
// 1. Write a program that displays current date and time in
// your browser.

// var date=new Date
// document.write(date)

// 2. Write a program that alerts the current month in words.
// For example December.

// var date=new Date
// var month=date.getMonth()
// var months=["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
// var currentMonth=months[month]
// document.write("Current Month : "+currentMonth)

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("Today is : "+nameOfToday)

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if(nameOfToday=="Sunday" || nameOfToday=="Saturday"){
//     document.write("It's Fun day")
// } 
// else{
//     document.write("It's Working Day")
// }


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16 th of the month
// else shows “Last days of the month”.

// var now = new Date();
// var theDate = now.getDate();
// alert("Today is : "+theDate)

// if(theDate < 16){
//     document.write("First fifteen days of the month")
// }
// else{
//     document.write("Last days of the month")
// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var now = new Date();
// document.write(now+"<br/>")
// var milliSec=now.getTime()
// document.write("Elapsed milliseconds since 1 ,January 1970 : "+milliSec+"<br/>")
// var minutes=(milliSec/(1000*60))
// document.write("Elapsed minutes since 1 ,January 1970 : "+minutes+"<br/>")


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var now = new Date();
// document.write(now+"<br/>")
// var hour=now.getHours()
// document.write(hour+"<br/>")
// if(hour > 0 && hour < 12){
//     document.write("It's PM")
// }
// else{
//     document.write("It's AM")
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var date=new Date()
// var a =new Date(laterDate)
// document.write(laterDate+"<br/>")
// document.write(a)


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1 st Ramadan?
// Note: 1 st Ramadan was on June 18, 2015

// var previousdate = new Date("May 25, 2020")
// document.write(previousdate+"<br/>")
// var date=new Date()
// document.write(date+"<br/>")

// var previousTime=previousdate.getTime()
// var currentTime=date.getTime()

// var diff=currentTime-previousTime

// var d=Math.floor(diff/(1000*60*60*24))
// document.write(d+"days have passed sicne 1st Ramazan 2020 <br/>")


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015

// var date = new Date(" Saturday December 05,2015 22:50:16")
// var time=date.getTime()
// var a=Math.floor(time/(1000*60))
// document.write("On reference date Saturday December 05,2015 22:50:16 ," + a + "second had passed since beginning of 2015 ")


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var currentDate=new Date()
// document.write(currentDate+"<br/>")
// var one_hour_before=new Date("Tue Jun 23 2020 07:10:58 GMT-0400 (Eastern Daylight Time)")
// document.write(one_hour_before+"<br/>")

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// function calculate_age(dob) { 
//     var diff_ms = new Date().getTime() - dob.getTime();
//     var age_dt = new Date(diff_ms); 
  
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }
// var age=calculate_age(new Date(1999,07,16))
// document.write("Age is : "+age+"<br/>");
// document.write("Birth year is : "+new Date(1999,07,16).getUTCFullYear())

// 14. Write a program to generate your K-Electric bill in your
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

// var customer_name="Shaikh Haris Ali"
// document.write("Customer Name : "+customer_name+"<br/>")
// var months=["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
// var current_month=new Date().getUTCMonth()
// var currentMonth=months[current_month]
// document.write("Current Month : "+currentMonth+"<br/>")
// var number_of_units=470;
// document.write("Number of units : "+number_of_units+"<br/>")
// var charges_per_unit=16
// document.write("Charges per unit : "+charges_per_unit+"<br/>")
// var within_due_date=new Date("June 25,2020")
// var a=within_due_date.getUTCDate()
// var b=within_due_date.getUTCFullYear()
// document.write(" Due Date : "+a+"/"+currentMonth+"/"+b+"<br/>")
// var netAmountPayable=number_of_units * charges_per_unit
// document.write("Net Amount Payable (within Due Date) = "+netAmountPayable.toFixed(2)+"<br/>")
// var latePaymentcharges=345;
// document.write("Late Payment Surcharge = "+latePaymentcharges+"<br/>")
// var grossAmount=netAmountPayable + latePaymentcharges
// document.write("Gross Amount Payable (after Due Date) = "+grossAmount.toFixed(2)) 

// Chapter 35-38 FUNCTIONS

// 1. Write a function that displays current date & time in your
// browser.

// function currDate(){
//     document.write(new Date())
// }
// currDate()

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greet(){
//     var fullName=first_name+last_name
//     document.write("Hello "+fullName)
// }
// var first_name="Shaikh Haris"
// var last_name="Ali"
// greet()


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function add(){
//     return a+b
// }

// var a=10
// var b=15
// var c=add()
// document.write(c)


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// var num1=parseInt(prompt(""));
// var operator=(prompt("Enter operator"));
// var num2=parseInt(prompt(""));

// function Calculate(num1,operator,num2){

//     if(operator=== "+" ){
//         document.write("ADDITION <br/>")
//         var add=num1+num2;
//         document.write(num1 +" + "+ num2 +" = "+add);
//     }
//     else if(operator=== "-" ){
//         document.write("SUBTRACTION <br/>")
//         var sub=num1-num2;
//         document.write(num1 +" - "+ num2+" = "+sub);
//     }
//     else if(operator=== "*" ){
//         document.write("MULTIPLICATION <br/>")
//         var mul=num1*num2;
//         document.write(num1 +" * "+ num2 +" = "+mul);
//     }
//     else if(operator=== "/" ){
//         document.write("DIVISION <br/>")
//         var div=num1/num2;
//         document.write(num1 +" / "+ num2+" = "+div);
//     }
// }

// Calculate(num1,operator,num2)

// 5. Write a function that squares its argument

// function square(n){
//     var sq=n*n
//     document.write("Square of "+n+" is "+sq)
// }
// var num=6
// square(num)

// 6. Write a function that computes factorial of a number.

// function factorialize(num) {
//     var result = num;
//     if (num === 0 || num === 1) 
//       return 1; 
//     while (num > 1) { 
//       num--;
//       result *= num;
//     }
//     return result;
// }
// var num=5
// var fac=factorialize(num);
// document.write("Factorial of "+num+" is "+fac)

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// var start=1
// var end =50

// function counting(start,end){
//     for(var i=start;i<=end;i++){
//         document.write(i+"<br/>")
//     }
// }
// counting(start,end)

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse 2 = Base 2 + Perpendicular 2

// function hypotenuse(){
//     var base=parseFloat(prompt("Enter Base"))
//     var per=parseFloat(prompt("Enter Perpendicular"))
//     function calPower(base,per){
        
//         var base2=Math.pow(base,2)
//         var per2=Math.pow(per,2)
//         return base2 + per2
//     }
    
//     var hyp=Math.sqrt(calPower(base,per))
    
//     document.write("Hypotenuse of a right angle triangle is"+ hyp.toFixed(3) +"<br/>")
// }
// hypotenuse()

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function Area(width,height){
//     var area=width * height
//     document.write("Arguments as value <br/>")
//     document.write("Area of Rectangle "+ area)
// }
// Area(2,6)
// var num1=3;
// var num2=5;
// function Area(width,height){
//     var area=width * height
//     document.write("Arguments as variables <br/>")
//     document.write("Area of Rectangle "+ area)
// }
// Area(num1,num2)

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam

// function palindrome(str){
//     var len= str.lenght;
//     var lootstart=Math.floor(len/2)
//     for(var i=0;i<lootstart;i++){
//         if(str[i]!==str[len-1-i]){
//             return false
//         }
//     }
//     document.write(str+" is palindrome ")
// }
// palindrome("madam")


// 11.Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write("EXAMPLE STRING : 'the quick brown fox' <br/>")
// document.write("EXPECTED OUTPUT "+uppercase("the quick brown fox"))

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write("EXPECTED OUTPUT : "+find_longest_word('Web Development Tutorial'));


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


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

// document.write(char_count('JSResourceS.com', 'o'));


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// •
// •
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// •
// •
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle πr 2

// var radius=4
// function calcCircumference(radius){
//     var π=3.142
//     var circumference=2*π*radius;
//     document.write("The circumference is : "+circumference+"<br/>")
// }
// calcCircumference(radius)

// function calcArea(radius){
//     var π=3.142
//     var area=π* Math.pow(radius,2) ;
//     document.write("The Area is : "+area)
// }
// calcArea(radius)


// ------------------End----------------------

