// Chapter 1 : ALERT
// TASK 1:Write a script to greet your website visitor using JS alert box.
// alert("Welcome to the Webiste");

// TASK 2:Write a script to display following message on your webpage:
// alert("Error! Please enter a valid password");

//TASK 3:Write a script to display following message on your webpage: (Hint : Use line break)
// alert("WelcomE to JS land \nHappy Coding");

//TASK 4: Write a script to display following messages in sequence:
// alert("Welcome to JS land");
// confirm("Happy Coding ! \nPrevent this page creating additional dialogs");

//TASK 5 : Generate the following message through browser’s developer console
// console.log("Hello... I can run JS through my Web browser's console");

//TASK 6 : Make use of alerts in your new/existing HTML & CSS project.

//TASK 7:Practice placement of <script></script> element following sections of your project in exercise 6:
//-------------------------------- END ---------------------------------

// CHAPTER NO 2: VARIABLES FOR STRINGS 
//TASK 1: Declare a variable called username.
// var username;

//TASK 2:. Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName="Shaikh Haris Ali";

// TASK 3:Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box

// var message;
// message="Hello World";
// alert(message);

//TASK 4:Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// var name="John Doe";
// var age="15 year old";
// var certification="Certified Mobile Application Development";

// alert(name);
// alert(age);
// alert(certification);


//TASK 5:Write a script to display the following alert using one JS variable:
// alert(" pizza \n pizz \n piz \n pi \n p");

// //TASK 6: Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

// var email="shaikhharisali16@gmail.com";
// alert("My Email Address is " +email);

// TASK 7:Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

// var book="A smarter way to learn JavaScript";
// alert("i am trying to learn from the book "+book);

//TASK 8: Write a script to display this in browser through JS
// document.write("Yah ! ican write HTML content ttough JAVASCRIPT");

//TASK 9:Store following string in a variable and show in alert and browser through JS
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

//-------------------------------- END ---------------------------------

// CHAPTER 3 :VARIABLES FOR NUMBERS 

//TASK 1:Declare a variable called age & assign to it your age. Show your age in an alert box.
// var age;
// age=15;
// alert("i am "+age+" old");

//TASK 2: Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
// var N=14
// alert("You have visited this site "+N+" times");

//TASK 3: Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
// var birthYear=1999;
// alert("My birth year is "+birthYear+"\nData type of my declared variable is number");

//TASK 4: A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var visitorName="Mike";
// var productTitle="T-shirt(s)";
// var quantity="10";

// alert(visitorName+" ordered"+quantity+" "+productTitle+" on XYZ Clothing store" );

//-------------------------------- END ---------------------------------

// CHAPTER 3 : VARIABLE NAMES: LEGAL & ILLEGAL

//TASK 1: Declare 3 variables in one statement.
// var a,b,c;

//TASK 2: Declare 5 legal & 5 illegal variable names.
//5 legal
// var abc;
// var $32;
// var _name;
// var n12;
// var first_name;
// //5 illegal
// var 1s;
// var #name;
// var &pic;
// var for;
// var default Status;


//TASK 3: 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS ________

// document.write('a) A heading stating “Rules for naming JS variables" <br/> b) A variable name can contain only letters, numbers, dollar signs, and underscores.<br/> c) Variables must begin with a letter, underscore or dolar sign.<br/> d) Variable names are case sensitive <br/> e) Variable names should not be JS keyword'); 


//-------------------------------- END ---------------------------------

// CHAPTER 4 : MATH EXPRESSIONS

//TASK 1: Write a program that take two numbers & add them in a new variable. Show the result in your browser
// var num1=3;
// var num2=5;
// var newNum=num1+num2;
// document.write("Sum of "+num1+" and "+num2+ " is " +newNum);

//TASK 2: Repeat task1 for subtraction, multiplication, division & modulus.
// var num1=20;
// var num2=5;
// var newNum1=num1+num2;
// var newNum2=num1-num2;
// var newNum3=num1*num2;
// var newNum4=num1/num2;
// document.write("Sum of "+num1+" and "+num2+ " is " +newNum1+ "<br/>");
// document.write("Subtraction of "+num1+" and "+num2+ " is " +newNum2+ "<br/>");
// document.write("Multiplication of "+num1+" and "+num2+ " is " +newNum3+ "<br/>");
// document.write("Division of "+num1+" and "+num2+ " is " +newNum4+ "<br/>");

//TASK 3:Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// var a;
// document.write("Value after variable declaration is: "+a +"<br/>");
// a=5;
// document.write("Initial Value : "+a +"<br/>");
// a=++a;
// document.write("After increment is: "+a+"<br/>");
// a+=7;
// document.write("after addition is: "+a+"<br/>");
// a=--a;
// document.write("after decrement is: "+a+"<br/>");
// a=a%3;
// document.write("Output : “The remainder is :"+a+"<br/>");

//TASK 4:Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// var costOfOneTicket=600;
// var buying=5;
// var costOfBuying=costOfOneTicket*buying;
// document.write("Total Cost to buy "+buying+" tickets to a movie is "+costOfBuying+ "PKR");

//TASK 5: Write a script to display multiplication table of any number in your browser. E.g
// var num=6;
// document.write("TABLE OF = "+num+ "<br/>");
// document.write(num+" x "+" 1 "+ "=" + (num*1)+"<br/>" );
// document.write(num+" x "+" 2 "+ "=" + (num*2)+"<br/>" );
// document.write(num+" x "+" 3 "+ "=" + (num*3)+"<br/>" );
// document.write(num+" x "+" 4 "+ "=" + (num*4)+"<br/>" );
// document.write(num+" x "+" 5 "+ "=" + (num*5)+"<br/>" );
// document.write(num+" x "+" 6 "+ "=" + (num*6)+"<br/>" );
// document.write(num+" x "+" 7 "+ "=" + (num*7)+"<br/>" );
// document.write(num+" x "+" 8 "+ "=" + (num*8)+"<br/>" );
// document.write(num+" x "+" 9 "+ "=" + (num*9)+"<br/>" );
// document.write(num+" x "+" 10 "+ "=" + (num*10)+"<br/>" );

// TASK 6: 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
//Conversion Formulae:
// C=(F-32)*5/9;
// F=(C*5/9)+32;


// //Celsius temperature
// var c =45;
// var C=(F-32)*5/9;
// var F=(c*5/9)+32;

// //Convert it to Fahrenheit
// var convertTemp=document.write(c+"C is"+F+" F <br/>");
// //Convert it to Celsius & output “NNoF is NNoC”
// document.write(F+"F is "+c+" C");


//TASK 7:Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser

// var priceOfItem1=50;
// var priceOfItem2=90;
// var quantityOfItem1=5;
// var quantityOfItem2=3;
// var shippingCharges=100;
// var totalCost=((priceOfItem1*quantityOfItem1)+(priceOfItem2*quantityOfItem2))+shippingCharges;

// document.write("Price of Item 1 is"+priceOfItem1+" <br>");
// document.write("Quantity of Item 1 is"+quantityOfItem1+" <br>");
// document.write("Price of Item 2 is"+priceOfItem2+" <br>");
// document.write("Quantity of Item 2 is"+quantityOfItem2+" <br>");
// document.write("Shipping Charges :"+shippingCharges+" <br>");
// document.write("The Total cost of your order is"+totalCost+" <br>");


//TASK 8: Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// var marksObt=450;
// var totalMarks=600;
// var percentage=(marksObt/totalMarks)*100;

// document.write("Marks Obtained by Student : "+marksObt+" <br>")
// document.write("Total Marks "+totalMarks+" <br>");
// document.write("Percentage of the student is :"+percentage+"%");

//TASK 9: Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var us_Dollar=10;
// var saudi_riyal=25;
// var one_usDollar=104.80;
// var one_saudiRiyal=28;

// var Pakistani_Currency=(us_Dollar*one_usDollar)+(saudi_riyal*one_saudiRiyal);

// document.write("Currency In PKR <br>");
// document.write("Total Currency in PKR "+Pakistani_Currency);


//TASK 10: Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var b=10
// var Ans1=(b+5)*10/2;
// document.write("Ans is: "+Ans1); 

//TASK 11: The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// var currentYear=2020;
// var birthYear=1999;
// var secondBirthYear=2000;

// var age1=currentYear-birthYear;
// var age2=currentYear-secondBirthYear;

// document.write("They are either " +age1+ " or " +age2+ " years old.");


//TASK 12 : 2. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var r=20;
// var π=3.142;
// var circumference= 2 *π* r;
// var area_of_circle=π* r**2;


// document.write("The Geometrizer <br>" );
// document.write("Radius of Circle is : "+r +" <br>");
// document.write("The Circumference is : "+circumference+" <br>");
// document.write("The Area is : "+area_of_circle);


//TASK 13: The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// var favSnack="Chocolate Chip";
// var currentAge=21;
// var max_age=60;
// var amount_per_day=5;
// var total=(max_age-currentAge)*amount_per_day;

// document.write("You will need " +total+" to last you until the ripe old age of "+max_age );


//CHAPTER 6-9: MATH EXPRESSIONS 

//TASK 1:Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a=10;
// document.write("Result <br>The value of a is "+a+" <br>");
// document.write("--------------------------------- <br></br>");

// a=++a;
// document.write("The value of ++a is "+a+"<br>");
// document.write("Now the value of a is : "+a+"<br></br>");

// a=a++;
// document.write("The value of a++ is "+a+"<br>");
// a++;
// document.write("Now the value of a is "+a+"<br></br>");

// a=--a;
// document.write("The value of --a is "+a+"<br>");
// document.write("Now the value of a is "+a+"<br></br>");

// a=a--;
// document.write("The value of a-- is "+a+"<br>");
// a--;
// document.write("Now the value of a is "+a+"<br></br>");


// TASK 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a=2,b=1;
// document.write("Value of a is "+a+"<br>");
// document.write("Value of b is "+b+"<br>");
// var result= --a - --b + ++b + b-- ;
// document.write("Result is "+result+"<br> <br>");

// document.write("--a : First subtract 1 from a then print value and the value become 1 <br>");
// document.write("--a - --b : in the second step the value of a is 1 and value of b is 0 because of pre-decrement, so --a - --b = 1 <br>");
// document.write("--a - --b + ++b: in second step total value is 1 and in the 3rd step value of b become 1 because of pre-increment and the total value is 2 <br>");
// document.write("--a - --b + ++b + b-- : in 3rd step total value is 2,in 4th step value of b is 1 even there is decrement but the derecemt is post decrement means 1st print the value then decrease by 1 ");


//TASK 3:Write a program that takes input a name from user & greet the user.

// var userNAme=prompt("Enter the username","Ali");
// document.write("Hello "+userNAme+" here");


//TASK 4 :Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default. 

// var num=parseInt(prompt("Enter the Number","5"));
// document.write("TABLE OF = "+num+ "<br/>");
// document.write(num+" x "+" 1 "+ "=" + (num*1)+"<br/>" );
// document.write(num+" x "+" 2 "+ "=" + (num*2)+"<br/>" );
// document.write(num+" x "+" 3 "+ "=" + (num*3)+"<br/>" );
// document.write(num+" x "+" 4 "+ "=" + (num*4)+"<br/>" );
// document.write(num+" x "+" 5 "+ "=" + (num*5)+"<br/>" );
// document.write(num+" x "+" 6 "+ "=" + (num*6)+"<br/>" );
// document.write(num+" x "+" 7 "+ "=" + (num*7)+"<br/>" );
// document.write(num+" x "+" 8 "+ "=" + (num*8)+"<br/>" );
// document.write(num+" x "+" 9 "+ "=" + (num*9)+"<br/>" );
// document.write(num+" x "+" 10 "+ "=" + (num*10)+"<br/>" );


//TASK 6: Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// var sub1=prompt("Enter 1st Subject");
// var sub2=prompt("Enter 2nd Subject");
// var sub3=prompt("Enter 3rd Subject");

// var totalMarks=100;

// var obtMarks1=parseInt(prompt("Enter Obtained Marks of 1st Subject"));
// var obtMarks2=parseInt(prompt("Enter Obtained Marks of 2nd Subject"));
// var obtMarks3=parseInt(prompt("Enter Obtained Marks of 3rd Subject"));
// var totalObtMarks=obtMarks1+obtMarks2+obtMarks3;

// var calTotalMarks=100*3;
// var per1=(obtMarks1/totalMarks)*100;
// var per2=(obtMarks2/totalMarks)*100;
// var per3=(obtMarks3/totalMarks)*100;

// var total_percentage=per1+per2+per3;

// document.write("Subjects "+"&nbsp &nbsp"+ "Total Marks "+ "&nbsp &nbsp"+ "Obtained Marks "+"&nbsp &nbsp"+" Percentage"+"<br>");
// document.write(sub1+" &nbsp &nbsp &nbsp &nbsp &nbsp    "+totalMarks+"   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp "+ obtMarks1+" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+per1+"% <br>");
// document.write(sub2+" &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  "+totalMarks+"   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  "+ obtMarks2+" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp   "+per2+"% <br>");
// document.write(sub3+" &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp   "+totalMarks+"   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  "+ obtMarks3+" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp     "+per3+"% <br>");
// document.write(" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp&nbsp &nbsp  &nbsp &nbsp &nbsp"+calTotalMarks+"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  "+ totalObtMarks+" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp "+total_percentage);


//CHAPTER 9-11:USER INPUT & CONDITIONAL STATEMENT

//TASK 1:Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var input =prompt("Enter City Name");
// var city="karachi";
// if(input===city){
//     document.write("Welcome to city of lights");
// }


//TASK 2:Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender=prompt("Enter Gender");
// if(gender==="male"){
//     document.write("Good Morning Sir");
// }
// else if (gender==="female"){
//     document.write("Good Morning Ma'am");
// }

//TASK 3:Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


// var color=prompt("Enter Color of road traffic");
// if(color==="red"){
//     document.write("Signal color &nbsp &nbsp &nbsp &nbsp &nbsp Message <br> <br>");
//     document.write("Red &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Must Stop");
// }
// else if(color==="yellow"){
//     document.write("Signal color &nbsp &nbsp &nbsp &nbsp &nbsp Message <br><br>");
//     document.write("Yellow &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Ready to move");
// }
// else if(color==="green"){
//     document.write("Signal color &nbsp &nbsp &nbsp &nbsp &nbsp Message <br><br>");
//     document.write("Green &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Move now");
// }

// TASK 4:Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”.

// var remainingFuel=parseInt (prompt("Enter remaining fuel"));
// if(remainingFuel < 0.25){
//     document.write("Please refill the fuel in your car");
// }


//TASK 5: Run this script, & check whether alert message would be displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// document.write("The alert message is display");


// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// document.write("the alert message isn't display");


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// document.write("condition 2 & 4 is true");


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// document.write("OUTPUT : the cost equals");


// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }
// document.write("OUTPUT : True");


// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
// document.write('alert message displayed');


//TASK 6: Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// var marksObt1=parseInt (prompt('Marks obtained in subject 1'));
// var marksObt2=parseInt (prompt('Marks obtained in subject 2'));
// var marksObt3=parseInt (prompt('Marks obtained in subject 3'));
// var totalObtMarks=marksObt1+marksObt2+marksObt3;
// var totalMarks=parseInt (prompt('Enter Total Marks '));
// var percentage= (totalObtMarks/totalMarks)*100;
// document.write("MARKSHEET <br>");
// document.write('Total Marks : '+totalMarks+"<br>");
// document.write('Marks Obtained : '+totalObtMarks)+"<br>";
// document.write('Percentage : '+percentage+'%'+"<br>");


// if(percentage >=80 ){
//     document.write('Garde : A-one <br>');
//     document.write('Remarks : Excellect');
// }
// else if(percentage >=70 ){
//     document.write('Garde : A <br>');
//     document.write('Remarks : Good');
// }
// else if(percentage >=60 ){
//     document.write('Garde : B <br>');
//     document.write('Remarks : You need to improve');
// }
// else if(percentage < 60 ){
//     document.write('Garde : Fail <br>');
//     document.write('Remarks : Sorry');
// }



// TASK 7:Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”


// var input=parseInt (prompt('Enter a number from 1 to 10'));
// var secretNum=8;
// if (input===secretNum){
//     document.write('Bingo! Correct answer');
// }
// else if(input===secretNum+1){
//     document.write('Close enough to the correct answer');
// }
// else{
//     document.write('Guess again');
// }


// TASK 8:Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var num=parseInt(prompt('Enter a number'));

// if(num%3===0){
//     document.write('The number is Divisible by 3');
// }
// else{
//     document.write('The number is not Divisible by 3');
// }


// TASK 9. Write a program that checks whether the given input is an
// even number or an odd number

// var num=parseInt(prompt('Enter a number'));
// if(num%2===0){
//     document.write('The Number is even number');
// }
// else{
//     document.write('The number is odd number');
// }


// TASK 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temp=parseInt(prompt('Enter Temperature'));
// if(temp > 40){
//     document.write("It is too hot outside");
// }
// else if(temp > 30){
//     document.write("The Weather today is Normal");
// }
// else if(temp > 20){
//     document.write("Today’s Weather is cool.");
// }
// else if(temp > 10){
//     document.write("OMG! Today’s weather is so Cool");
// }


//TASK 11:Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var num1=parseInt(prompt(""));
// var operator=(prompt("Enter operator"));
// var num2=parseInt(prompt(""));

// if(operator=== "+" ){
//     var add=num1+num2;
//     document.write("Num1 + Num2 = "+add);
// }
// else if(operator=== "-" ){
//     var sub=num1-num2;
//     document.write("Num1 - Num2 = "+sub);
// }
// else if(operator=== "*" ){
//     var mul=num1*num2;
//     document.write("Num1 * Num2 = "+mul);
// }
// else if(operator=== "/" ){
//     var div=num1/num2;
//     document.write("Num1 / Num2 = "+div);
// }

// CHAPTER 12-13:IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 

//TASK 1: Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


// var input=prompt("Enter a character");

// if (input >= String.fromCharCode(65) && input<=String.fromCharCode(90)){
//     document.write("Uppercase Letter ");
// }
// else if(input >= String.fromCharCode(65) && input<=String.fromCharCode(90)){
//     document.write("Lowercase Letter ");
// }
// else if(input >= String.fromCharCode(48) && input<=String.fromCharCode(57)){
//     document.write("it's a number");
// }


// TASK 2:Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var a=parseInt(prompt("Enter 1st integer"));
// var b=parseInt(prompt("Enter 2st integer"));

// if (a > 0 && b > 0 && a>b){
//     document.write("The larger number is " + a );
// }
// else if( a > 0 && b > 0 && b > a){
//     document.write("The larger number is " + b );
// }
// else if(a > 0 && b > 0 && b == a){
//     document.write("Both integers are equal");
// }
// else {
//     document.write("Please add an integer!");
// }


// TASK 3:Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var input= prompt("Enter a number");
// if(input > 0){
//     document.write("The number is positive");
// }
// else if(input < 0){
//     document.write("The number is negative");
// }
// else if(input == 0){
//     document.write("The number is zero");
// }
// else{
//     document.write("It's not a number");
// }


// TASK 4:Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// var char=prompt("Enter a character");

// if (char >= 65 && char <=90){
//     if (input == 97 || input == 101 || input == 105 || input == 111 || input == 117){
//         document.write(char+"is a vowel");
//     }
// }
// else{
//     document.write(char+"is not a vowel");
// }

//TASK 5:5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var pass="abc123";
// var pass1="cba123";
// var input=prompt("Enter 1st password");
// var input1=prompt("Enter 2nd password");

// if(input===""&& input1===""){
//     document.write("Please enter your password");
// }
// else if(input === pass && input1===pass1){
//     document.write("Correct! The password you entered matches the original password")
// }
// else{
//     document.write("Incorrect password")
// }


// TASK 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// document.write(greeting);
// }
// else{
// greeting = "Good evening";
// document.write(greeting);
// }


//TASK 7:Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time=prompt("Enter time in 24 hours clock format");

// if (time >= 0000 && time <=1200 ){
//     document.write("GOOD MORNING");
// }
// else if (time >= 1200 && time <=1700){
//     document.write("GOOD AFTERNOON");
// }
// else if (time >= 1700 && time <=2100){
//     document.write("GOOD EVENING");
// }
// else if (time >= 2100 && time <=2359){
//     document.write("GOOD NIGHT");
// }

//CHAPTER 14-16:ARRAYS 


//TASK 1:Declare an empty array using JS literal notation to store student names in future.

// var food=[];


//TASK 2:Declare an empty array using JS object notation to store
// student names in future.

// var foods=new Array();


//TASK 3:Declare and initialize a strings array.
// var foods=["pizza","burger","Sandwich"];

//TASK 4:Declare and initialize a numbers array.
// var num=[2,6,7,4,3,5,8];

//TASK 5:Declare and initialize a boolean array.
// var bol=[true,false];

//TASK 6:Declare and initialize a mixed array.
// var arr1=["bus",true,23,"food",false,23,01];

//TASK 7: Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var arr1=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil." , "PhD"]
// document.write("QUALIFICATIONS <br><br>");
// for(var i=0;i<arr1.length;i++){
//     document.write(arr1[i] +"<br>");
// }


// TASK 8:Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var names=["Usama","Sumair","Zaeem"];
// var score=[234,345,400];
// var totalMarks=500;
// for(var i=0;i < names.length;i++){
//     var per=(score[i]/totalMarks)*100;
//     var per1=per.toFixed(2);
//     document.write("Score of "+names[i]+" is "+score[i]+". Percentage : "+per1+"% <br>");
// }


//TASK 9: Initialize an array with color names. Display the array
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

// var color=["red","yellow","orange","blue"];

// var input=prompt("Enter color which you want insert  at the start");
// color.unshift(input);
// document.write(color +"<br>");

// var input1=prompt("Enter color which you want insert at the end");
// color.push(input1);
// document.write(color+"<br>");

// var input2=prompt("Enter color which you want insert  at the start");
// var input3=prompt("Again Enter color which you want insert  at the start");
// color.unshift(input2,input3);
// document.write(color +"<br>");

// color.splice(0,1);
// document.write(color +"<br>");

// color.pop();
// document.write(color +"<br>");

// color.splice(2,0,"white");
// document.write(color+"<br>");

// color.splice(2,2);
// document.write(color+"<br>");


// TASK 10:Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var arr1=[134,112,120,145,135,136,142];
// document.write("Score of Students :"+arr1+"<br>");
// var sorted_array=arr1.sort();
// document.write("Sorted Score of Students :"+sorted_array+"<br>");


//TASK 11:11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities=["karachi","Islamabad","lahore","Multan"];
// var selectedCities=cities.slice(1,3)
// document.write("Cites : "+cities+" <br>");
// document.write("Selected Cites : "+selectedCities+" <br>");

//TASK 12:Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", "is" , "my", "cat"];
// var arr1=arr.join( " ");
// document.write("ARRAY : <br> "+arr+"</br>");
// document.write("STRING : <br> "+arr1);

//TASK 13:Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var devices=["keyboard","mouse","printer","monitor"];
// document.write("Devices : <br>"+devices+"<br>");

// document.write("OUT : "+devices.shift()+"<br>");
// document.write("OUT : "+devices.shift()+"<br>");
// document.write("OUT : "+devices.shift()+"<br>");
// document.write("OUT : "+devices.shift()+"<br>");


//TASK 14: Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// var devices=["keyboard","mouse","printer","monitor"];
// document.write("Devices : <br>"+devices+"<br>");

// document.write("OUT : "+devices.pop()+"<br>");
// document.write("OUT : "+devices.pop()+"<br>");
// document.write("OUT : "+devices.pop()+"<br>");
// document.write("OUT : "+devices.pop()+"<br>");

//TASK 15:Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:




//CHAPTER NO 17 to 20: ARRAYS AND LOOP 

//TASK 1:Declare and initialize an empty multidimensional array. (Array of arrays)

//var arr1=[[],[],[]];

//TASK 2=Declare and initialize a multidimensional array representing the following matrix:

// var arr1=[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ];



// for(var i=0;i<arr1.length;i++){
//     for(var j=i-2;j<=arr1.length;j++){
//         document.write(arr1[i][j]+"<br>");
        
//     }
//     document.write("<br>");
// };


//TASK 2: Write a program to print numeric counting from 1 to 10.
// var arr1=[1,2,3,4,5,6,7,8,9,10];
// for(var i=0;i<arr1.length;i++){
//     document.write(arr1[i]+"<br>");
// }

//TASK 3:Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var tableNum=parseInt(prompt("Enter Number"));
// var length=parseInt(prompt("Enter table length"));

// for(var i=1;i<=length;i++){
//     document.write(tableNum+" x "+i+" = "+(tableNum*i));
//     document.write("<br>");
// }


// TASK 4:Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits=["apple","banana","mango","orange","strawberry"];

// for(var i=0;i<fruits.length;i++){
//     var index = fruits.indexOf(i);
//     document.write("Element at index "+ i +" is "+fruits[i]);
//     document.write("<br>");
// }
    

//TASK 5:Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// document.write("COUNTING");
// for( var i=0;i<counting.length;i++){
//     document.write(counting[i]);
//     document.write("<br>");
// }

// var counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//document.write("REVERSE COUNTING");
// document.write(counting.reverse());

// var counting=[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];
//document.write("EVEN");
// for( var i=0;i<counting.length;i++){
//     if(counting[i]%2==0){
//     document.write(counting[i]);
//     document.write("<br>");
//     }
// }


// var counting=[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];
// document.write("ODD <br>");
// for( var i=0;i<counting.length;i++){
//     if(counting[i]%2!=0){
//     document.write(counting[i]);
//     document.write("<br>");
//     }
// }


// var counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];
// document.write("SERIES <br>");
// for( var i=0;i<counting.length;i++){
//     if(counting[i]%2==0){
//     document.write(counting[i]+"K");
//     document.write("<br>");
//     }
// }


// TASK 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var search=prompt("Search the Item");
// var input=false;
// for(var i=0;i<A.length;i++){
// if(search==A[i]){
//     alert(search+" is available at index "+i+" in our bakery");
//     input=true;
//     break;
// }
// }
// if(input==false){
//     alert("We are sorry "+search+" is not available in our bakery");
// }

// TASK 8. Write a program to identify the largest number in the
// given array.
//A = [24, 53, 78, 91, 12].

// var A = [24, 53, 78, 91, 12]
// document.write("Array Items : "+A )+"<br>";
// var isLargest=Math.max(...A);
// document.write("The Largest number is : "+isLargest);

// TASK 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var A = [24, 53, 78, 91, 12]
// document.write("Array Items : "+A +"<br>");
// var isLargest=Math.min(...A);
// document.write("The Smallest number is : "+isLargest);


// TASK 10:Write a program to print multiples of 5 ranging 1 to
// 100.

// for(var i=1;i<=100;i++){
//     if(i%5===0){
//         document.write("Multiples of 5"+i+"&nbsp&nbsp&nbsp");
//     }
// }
    

