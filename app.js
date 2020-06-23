// chapter 20-25

  

// task1
/*
    var firstName= prompt("Enter First Name");
    var lastName= prompt("Enter Last Name");
    var fulName= firstName+lastName;
    document.write("Ful Name <br>"+ fulName); */

    // task2
   // var faviouritmobile=prompt(" Enter favorite mobile phone model");//
   // document.write(" Favorite Phone is:" +faviouritmobile+"<br>") ;
   // var n = faviouritmobile.length;
   // document.write("Length of string:" +n)



    //task3
  //  var name="pakistani";
    //document.write("String :"+name+"<br>")
    // document.write("Index of 'n':" +name.indexOf("n"));

    //task 4
  //  var name="Hello World"
    //document.write("String :"+name+"<br>")
    //document.write(" Last Index of 'l':" +name.lastIndexOf("l")); 

    //task 5
   // var char="pakistani";
   // document.write("String :"+char+"<br>")
 //    document.write("Character at index "+char[3]+":  "+"3")

     // task6
      //var firstName=prompt("enter first name");
      //var lastName=prompt("enter Last name");
       //  document.write(firstName.concat(lastName));
  // task 7

  //var city="hyderabad";
  //var res = city.replace( "hyderabad","Islamabad");
  //document.write( "city:" + city+"<br>");
 //document.write("After Replacement:" +res);

  // task8
  /*var text = "Ali and Sami are best friends. They play cricket and football together.";

       for (var i = 0; i < text.length; i++){ 
     if (text.slice(i, i + 3) === "and") { 
     text = text.slice(0, i) + "&" + text.slice(i + 3); 
    document.write(text);

     }
    }
    // task9

    var str="472";
    var deci=parseInt(str);
  
    document.write("value"+str+"<br>");
    document.write("Type: String  <br>");
    document.write("value"+deci+ "<br>");
    document.write("Type: Number  <br>"); 
  // task10
  var name= prompt("enter any name");
  name = name.toUpperCase();
  document.write(name); */

// task11

//var name = prompt(" enter name");
//var firstname = name.slice(0,1);
// firstname = firstname.toUpperCase()
  //var othername = name.slice(1)
  //othername = othername.toLowerCase()
  //var name =firstname + othername;
  //document.write(firstname +othername); 


// task12
/*var num = 35.36 ; 
document.write("Number: "+num.toString()+"<br>");
 var num= parseFloat ("3536");
document.write( "Result:"+num); */


// task13
/* var userName=prompt("Please enter User Nmae")
var str;
for(var i=0;  i<=userName.length;i++){
  str = userName.charCodeAt(i);
  if(str == 33  ||  str == 44 || str == 46  || str == 64 )
  alert("please enter valid user name ")
}*/


//task14
/*var uesr=prompt("Welcom to BAC bakery:what do you order sir/mam")
var bakery=["cake", "applepie", "cookie", "chips", "patties"]
  for( var i=0; i<bakery.length; i++) {
    uesr = uesr.toLowerCase();
  
 if (bakery[i]== uesr){
alert(bakery[i]+ "available at index" + i+  "in oure bakery");
}

else if  (bakery[i] !=uesr){
  alert("we are sorry :"+uesr  +"is not available in our bakery");
  }

//else if (arry[1]==item){
//alert("applepie has available at index 2 in our bakery");
//}

//else if (arry[2]==item){
//  alert("cookie has available at index 3 in our bakery");
  //}

  //else if (arry[3]==item){
    //alert("chips has available at index 4 in our bakery");
    //}
    //else if (arry[4]==item){
      //alert(" patties has available at index 5 in our bakery");
      //}
     

  }	 




  // task 15
 /* var password=prompt("enter your password")
 for(var i=0;  i<=password.length;i++){
 str = password.charCodeAt(0);
  if(str == 48  ||  str == 49 || str ==50 || str == 51   ||  str == 52 || str ==53 || str == 54 ||  str == 55 || str ==56  || str == 57 ){
  alert("password can not begin with a number") 
  }

 else if (password  == ""){
   alert(" It should contain alphabets and numbers"); 
  
  }
   else if (password.length>=6){
         alert(" It must at least 6 characters long ")
   }

 }
  */

  





  // task16 
//var str = "University of Karachi";
//var text = str.split ("");
//for ( var i = 0; i < str.length; i++) {
  //   document.write( str[i] + "<br>");
//}


// task17
 //var name= prompt("enter any text");
  //name = name.lastIndexOf();
//  document.write( name);
 
// task18
//var para ="The quick brown fox jumps over the lazy dog";
//for (var i = 0; i < para.length; i++){
 // count(para,"the");
  //document.write(para);
//}
// var count=(para,"");
//document.write(count);



// Assignment 25-30


// task1
/*var number=prompt("enter any number");
document.write("Number:"+number+"<br>");
var number1= Math.round(number)
document.write("Round of Value "+ number1+"<br>");
 var floor=Math.floor(number);
document.write("floor value "+ floor+"<br>");
var number= Math.ceil(number);
document.write("ceil value:"+number)
// task2
var number=prompt("enter any number");
document.write("Number:"+number+"<br>");
var number1= Math.round(number)
document.write("Round of Value "+ number1+"<br>");
 var floor=Math.floor(number);
document.write("floor value "+ floor+"<br>");
var number= Math.ceil(number);
document.write("ceil value:"+number)*/

// task3
//var b=-4;
 //var c = Math.abs(-4);
 //document.write("The value of"+b+"is"+c);
// task4
//var deci =prompt("enter value");
//var deci =Math.random() 
//document.write(deci);

//task5
/*var headuser= prompt("enter head coin")
var tailsuse =prompt("enter tails coin")
  var headuser= Math.random() 
  var headuser= Math.round(headuser)
  var tailsuse= Math.random() 
  var tailsuse= Math.round(tailsuse)
	document.write("random coin value:Heads" + headuser+ "<br>")
  document.write("random coin value:Tails"  +tailsuse  )   */

// task6
//var number= prompt("enter number");  
 //var number=  Math.random();
 //var floor = Math.round (number)
  //document.write("random number between 1 and 100"+" " +floor);

// task 7
//var weight= prompt("enter your waight in kg")
//document.write ("The weight of user is :"+weight)


//task8
/*var number= prompt("Entre secrit number");
if(number=="9"){
alert("try again")
}
if(number=="5"){
  alert("congrulation")
}*/











//Assignment 31-34
// task1
//var a = new Date()
//document.write(a)
//task2

//var  monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
//var d = new Date();
//document.write("The current month : " + monthNames[d.getMonth()]);
// task3
//var  weeksNames = ["sun",  "mon", "Tue", "wed", "thu", "fri", "sat"];
//var d = new Date();
//document.write(" Today is  : " + weeksNames[d.getDay()]);
//task4
 /* var  weeksNames = [ "sun" ,"Mon", "Tue", "wed", "Thu", "Fri", "Sat"];
   var d = new Date();
   var f=  weeksNames [d.getDay()];
    if (f == "Sat"){
  document.write("Its Fun day")
  } 
  else if (f=="sun"){
   document.write("Its Fun day")
  }
  
 // task 5
 
//var date=16;
//if ( date <=16){
//document.write("First fifteen days of the month");
//}
//else{
//  document.write("last day of the month")
//}*/  
// prac
// task6
/*var minutes = new Date();
var minmili = minutes.getTime();
var minconvert = minmili/(1000*60*60)
document.write("current date"+minutes)
document.write("Elapsed milisecound since junarry 1 1970" + minmili+"<br>")
document.write("Elapsed minutes since junarry 1 1970" + minconvert+"<br>")

  // task7
 /* var date= new Date()
  var hours = date.getHours();
  var minutes = date.getMinutes();
 if ( ampm = hours >= 12 ? 'pm' : 'am'){
    alert("its pm")
 }
 else{
   alert("its Am")
 }*/

// task8
//var date= new Date("31,dec 2020")
//document.write("later Date"+date);

  // task9
 /* var oneDay = 24 * 60 * 60 * 1000; 
var  firstDate = new Date(18,6,2015);
var  secondDate = new Date(31,4, 2020);

var diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  document.write(diffDays+" days have passed since 1st Ramzan 2015")*/



//task10
/*var date  = new Date("jan,1,2020");
var sec = date.getTime() 
var currentdate = new Date()
var sec2 = date.getTime()
var diff = currentdate-date;
var accusec =Math.floor( diff/1000*60*60*24*30);
document.write( "on reference date"+ date+"<br> "+accusec+"Seconds had passed beginning of 2020");

 // task 11
/* var currentdate =new Date()
 var date = new Date()
 date.setHours(16)
 document.write(currentdate+  "<br>"+ "1 hour ago it was "  +date) */



// task 12
/*var backdate = new Date("18,jun,1920");
var currentdate = new Date()
document.write("Current Date :"+currentdate+"<br>"+" 100 years back, it was" +backdate)*/

//task 13
/*var dob= new Date(prompt(" enter your date of birth"));
var dobmili= dob.getTime();
var today = new Date();
var todaymili = today.getTime()
var differ = todaymili - dobmili;
var accuage =Math.floor (differ/(1000*60*60*24*30*12));
document.write(accuage)*/

// task14
/*var name ="beenish"
var month="Jun"
var numunit=410;
var charperunit=16;
 var latePaymentSurcharge =350;
 var netAmount = numunit*charperunit;
var  grossAmoount= netAmount+latePaymentSurcharge;
document.write("K-Electric bill <br>")
document.write("Customer Name:"+" "  +name+"<br>")
document.write("Month:"+" "  +month+"<br>")
document.write("Number of units:"+" "  +numunit+"<br>")
document.write(" Charges per unit:"+" "  +charperunit+"<br>")
document.write("Net Amount Payable (within Due Date)"+netAmount+" " +"<br>")
 document.write("Late Payment Surcharge: "+latePaymentSurcharge+"<br>")
 document.write("Gross Amount Payable (after Due Date)"+grossAmoount)*/


// assignmnet 35-38
// task1
//function date (){
  // today = new Date()
//}
//date()
//document.write(today)

// task2
 /*function greets(){
     a= "beenish"
     b="Aslam"
 } 
 greets()
 document.write("ful name:"+"  "+a,b)*/

/* function add() {
   num1=+prompt("enter first value")
   num2=+prompt("enter secound value")
    return num1+num2;
    
 }
 add()
 document.write(num1+num2)


  // task4
 /* function cal (num1,opr,num2){
    if(opr==="+"){ 
      return num1+num2
      }
      else if(opr==="-"){ 
      return num1-num2
      }
      else if(opr==="*"){ 
        return num1*num2
        }
        else if(opr==="/"){ 
          return num1/num2
          }
          else{
            return "incorect operator"
          }
    }
    var result1 = cal (2,"+",2);
    var result2 = cal (7,"*",2);
    var result = cal (5,"-",2);
    document.write(result2+"<br>")
    document.write(result1+"<br>")
    document.write(result+ "<br>")*/
  // task5
    //function square(number) {
  //    return number ** 2;
//}
    
  //  document.write(square(5));
  // task6
  //  function factorial(number) {
    //  return (number != 1) ? number * factorial(number - 1) : 1;
    //}
    
  //  document.write(factorial(5));


  // task 7
 /* function count (){
    var str=prompt("enter word")
    var str =str.length;
    document.write(str)
  }
  count () */



  // task8
 /* function hypo(){
    var per=+prompt("enter parpendicular valu")
    var per1=per*per; 
    var base=+prompt("enter base value")
    var base1 =base*base;
    var h=base1+per1;
    var hypo =(h*h)
       alert(hypo);  
    }    
  
  hypo();

  

  // task9
  //function area (area,width){
    //a=  area*width;
  //}
   //area(3,5)
   //document.write(a)


  // task10

/*function palindrom(){ 
    word= prompt("enter word");
    check="";
for (var i= word.length -1; i>=0; i--){
	check +=word[i]
} 
if(word== check){
  alert(" its palindrom word")
	}
else{
  alert("its not palindrom")
}

 }
 palindrom()*/







// task 11

//function titleCase(str) {
  //var splitStr = str.toLowerCase().split(' ');
  //for (var i = 0; i < splitStr.length; i++) {
  
  //    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  //}

  //return splitStr.join(' '); 
//}

//document.write(titleCase("the quick brown fox"));







// task12
/* function findlongestword(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var i = 1 ; i < array1.length ; i++)
  {
    if(result.length < array1[i].length)
    {
    result = array1[i];
    } 
  }
  return result;
}
document.write(findlongestword('Web Development Tutorial'));
// task 13
  String.prototype.count=function(s1) { 
    return (this.length - this.replace(new RegExp(s1,"g"), '').length) / s1.length;
}

test = "JSResourceS.com" ;
 document.write ( alpha = test.count('o')) */

 //task14

 /* function circumference(){
     radius=20;
   circum =2*3.14*radius;
   

 }
 function calcArea(){
  radius=20;
 area=2*3.14*radius;

  
 }

 circumference()
 document.write("the  circumference is "+ circum+"<br>")
calcArea()

document.write("the area is"+radius)

*/
