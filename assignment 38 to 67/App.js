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


// CHAPTER 38-43

// QUESTION NO 1
// function square() {
//     alert("Result is ; " + result)
// }
// n1 = parseInt(prompt("Enter Value base"))
// n2 = parseInt(prompt("Enter Value power"))
// var result=Math.pow(n1,n2);
// square("Result is ; " + result)


// QUESTION NO 2
// var y = prompt("Enter a year")
// function check () 
// {
// if( y % 4==0 )
// {
//     alert( y + " is a leap year")
// }
// else
//  {
//     alert( y + " is not leap year")
// }
// }
// check()


// QUESTION NO 3
// var a = 20
// var b = 20
// var c = 20
// function areaOfTriangle(){
// console.log(d)
// } 
// var d = (a+b+c)/2
// areaOfTriangle(d)


// QUESTION NO 4
// function getNumber(a,b,c){
// var a =parseInt(prompt("Give mark of 1st subject")) 
// var b =parseInt(prompt("Give mark of 2nd subject"))
// var c =parseInt(prompt("Give mark of 3rd subject"))
// var c1 = a+b+c
// // console.log( " Marks get by student : " + a , b, c )
// console.log( " Marks get by student : " + c1 )
// function averageMarks(){
// var d = (a+b+c)/300
// console.log( " Average Marks : " + d)

// function percentage(){
// var totalMarks = 300
// var percen = (d/totalMarks)*100
// console.log(  "percentage : " + percen + "%" )
// }
// percentage()

// } 
// averageMarks()
// } 
// getNumber()


// QUESTION NO 5
// function findIndex(){
// var a = prompt("Enter word")
// var a1 = a.indexOf("a")
// console.log(a1)
// }
// findIndex()

// QUESTION NO 6
// function removeVowels(a,a1){
// var a = prompt("Enter a Sentence")
// var a1 =a.replace(/[aeiouAEIOU]/ig , "")
// console.log(a1)
// }
// console.log(removeVowels())


// QUESTION NO 7
// function removeVowels(a,a1){
// var a = prompt("Enter a Sentence")
// var a1 =a.match(/[ae]/ig)
// console.log( a)
// console.log("such occurrances are " + a1)
// }
// console.log(removeVowels())



// QUESTION NO 8
// function distanceKm(){
// var twoCitiesdistance = 100; 
// console.log(  " Distance in Km : " + twoCitiesdistance + " Km ")

// function distanceMeters(){
// var a = twoCitiesdistance*1000
// console.log( "Distance in Meters : " + a + " m ")

// function distanceFeet(){
// var distanceFeet = twoCitiesdistance*3281
// console.log( "Distance in Feet : " + distanceFeet + " ft ")

// function distanceInches(){
//     var distanceInches = twoCitiesdistance*393700
//     console.log( "Distance in Inches : " + distanceInches + " inc ")

// function distanceCenti(){
// var distanceCenti = twoCitiesdistance*100000
// console.log( "Distance in Centi : " + distanceCenti + " cm ")
    
// }    
// distanceCenti()
// }
// distanceInches()
// } 
// distanceFeet()
// }
// distanceMeters()
// }
// distanceKm()


// QUESTION NO 9
// function overtimePay(){
// var a = parseInt(prompt(" Your Extra Working Hours"))
// var b = 12
// var c = a*b 
// console.log(" Extra working Hours : " + a)
// console.log( " Your total payment is : " + c + " Rs/- ")
// }
// overtimePay()
// ------------------End----------------------

// CHAPTER 43-48
//Question 3
// function removerow(){
//     var table = document.getElementById("table")
//     table.deleteRow(1)
// }

  
// QUESTION NO 4

// function changeImage(id, src){
// var image= document.getElementById("img");
// image.src = src
// }

// QUESTION NO 5
// function button1(){
// var increment = document.getElementById("here").innerHTML
// increment++
// document.getElementById("here").innerHTML = increment;
// }

// function button2(){
//     var decrement = document.getElementById("here").innerHTML
//     decrement--
//     document.getElementById("here").innerHTML = decrement;
//  }


// CHAPTER 49-52

// QUESTION NO 1
// function getInfo(){
// var a = document.getElementById("name").value
// var b = document.getElementById("password").value
// console.log( "Your name is : " + a)
// console.log( "Your password is :" + b)
// }


// QUESTION NO 2

// function readMore(){
// var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non et "
// var paragraph = document.getElementById("para")
// paragraph.innerHTML = text
// }

// ------------------End----------------------



