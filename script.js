// var f = ("Bharat");
// document.write(f);   //

// var x = 'bharat';
// x=24;
// x=false;


// document.write(x);
// document.write("<br>");
// document.write(typeof x);

//---------------If Statement Condition-----------------


// var a = 20;
// var b = 30;

// if(a < b){
//     document.write("Baba is Baba");
// }

//---------------Logical Operater---------------------



// var age = 20;

// if(age >= 18 && age <=21){
//     document.write("You are eligible");
// }

//-------------If else Statement 1stway----------------
 
// var a = 30;

// if(a > 40){
//  document.write("x is Greater");
// }else{
//     document.write("x is Smaller");
// }

// var name = 'Vipin';
// var gender = 'Female';

// if(gender == 'Male'){
// document.write("Hello Mr."+ name);
// }else{
//  document.write("Hello Miss."+ name);
// }


//-----------------if else if statement------------------------------


// var per = 60;

// if(per >= 80 && per <= 100){
//     document.write("You are in Merit");
// }else if(per >= 60 && per < 80){
//     document.write("you are 1st divison");
// }else if(per >= 45 && per < 60){
//     document.write("you are 2nd divison");
// }else if(per >= 33 && per < 45){
//     document.write("you are 3rd divison");
// }else if (per < 33){
//     document.write("you are fail");
// }else{
//     document.write("Please enter Valid Percentage");
// }


//------------------Conditional Ternary Start----------------------------------



/* var a = 100;
var b;

(a == 100)? b = "true" : b = "false";

document.write(b); */


//------------------Conditional Ternary End----------------------------------


//------------------Switch Case Start----------------------------------

/* var mon = 9;

switch(mon){
    case 0:
        document.write("January");
        break;
        case 1 :
            document.write("February");
            break;
        
        case 2 :
            document.write("March");
            break;
        
        case 3 :
            document.write("April");
            break;

        case 4 :
             document.write("May");
             break;
        
        case 5 :
            document.write("June");
            break;

        case 6 :
            document.write("July");
            break;

        case 7 :
            document.write("August");
            break;

        case 8 :
            document.write("September");
            break;
        
        case 9 :
            document.write("October");
            break;

        case 10 :
            document.write("November");
            break;

        case 11 :
            document.write("December");
            break;

            default:
                document.write("Please Enter the valid month");
}

*/



//------------------Switch Case End----------------------------------



//------------------Funcations Call Start----------------------------------

        /*function mind(){
            document.write("Hello World");
        }

        mind(); */

//------------------Funcations Call Start End----------------------------------


//------------------Funcations Call with parameter Start----------------------------------

// function mind(fname , lname){
//     document.write(fname + "&nbsp"+ lname);
// }


// mind("Ram","Pal");


// Value add in funcation


// function mind(a,b){
//     document.write(a+b);
// }

// mind(202,30)


//------------------Funcations Call with parameter End----------------------------------




//------------------Functions with Return Value Start----------------------------------

// function fullname(fname , lname){
//     var a = fname + " " + lname;
//     return a;
// }

// var tt = fullname("Vipin", "Kumar");
// document.write(tt);


//------------------Functions with Return Value Start--------------------------------
/*

function sum (math,physics,chemistry){ // create the funcation and write subject name
    var a = math + physics + chemistry;
    return a;
}

var total = sum(100,100,100);  // total in marks
percentage(total);

function percentage(tt){ // create the funcation using for percentage
    var per = tt/300 * 100;
    document.write(per)
}
    
*/


//------------------Functions with Return Value End----------------------------------


//------------------While Loop increment & decrement Start----------------------------------

/*
var a = 10;

while(a >= 1){
    document.write(a +  " Learning With Vipin <br>");
    a = a-1;
} 
    */

//------------------While Loop increment & decrement End----------------------------------


//------------------Do While Loop  Start----------------------------------

/*var a = 1;

do{
    document.write("Vipin the great<br>");
    a = a+1;
}while(a<=10); */

//------------------While Loop End----------------------------------


//------------------For Loop start----------------------------------

/*for(var a = 1; a <= 10; a++){
    document.write("Vipin the great<br>");
}*/

//------------------for Loop End----------------------------------


//------------------Break & Continue Statement Start----------------------------------

  /* 
   for(var a =1; a<=10; a++){
        if(a == 3){
            document.write("Hey : " + a + "<br>");
            break;
    }
    document.write("Number : " + a + "<br>");
}
    */



//------------------Break & Continue Statement End----------------------------------


//------------------Even or Odd start----------------------------------

/*for(var a = 1; a <= 100; a++){
    if(a % 2 == 0){
        document.write(a + "<br>");
    }
}
    */

//------------------Even or Odd End----------------------------------


//------------------Nested loop start----------------------------------

/* for(var a = 1; a <= 100; a = a+10){
    for(var b = a; b< a+10; b++){
        document.write(b +" ");
    }
    document.write("<br>");
}
    */

/* inner value print

   for(var a =1; a <= 10; a++){
    for(var b =1; b <= a; b++){
        document.write(b + " ");
    }
    document.write("<br>")
   } 
*/

//outer value print

/* for(var a=1; a<=5; a++){
    for(var b=1; b<=a; b++){
        document.write(a);
    }
    document.write("<br>")
}*/


//------------------Nested loop End----------------------------------


//------------------Array Start----------------------------------

   /* var ary = [10,20,30,40,50];  // write method in array

    var sum = 0; // variable for add value in array

    for(var a = 0; a <= 4; a++){ 
        document.write(ary[a] + "<br>");
       
        sum = sum+ary[a]; // Total in array
    }

    document.write(sum);  */

    //document.write(ary);


  
  /*  var ary = new Array(4);   // Multiple add value in array
    for(var g = 0; g < 4; g++){   // Use for loop
        ary[g] = prompt("Enter the value:");  // use prompt for enter the value
    }

    for(var a= 0; a< 4; a++){  
        document.write(ary[a] + "<br>");
    }
    document.write()  */ 
//------------------Array End----------------------------------

//------------------Multidimensional Arrays Start----------------------------------

 /* var ary = [
    ["Vipin",18,"Kumar","B.com"],
    ["Karan", 19, "Kumar", "B.sc"],
    ["Rudra",20, "Pal", "B.Tech"]
]; 

document.write(ary.length);
for(var a =0; a < 4; a++){
    for(var b = 0; b < 4; b++)
       {
        document.write(ary[a][b] + "<br>");
       }
}


*/


//------------------Multidimensional Arrays End----------------------------------


//------------------Delete & Modifiy Arrays Start----------------------------------
/*
var a = ["Vipin", 29, "B.com", "Ghaziabad"];
document.write(a);
a[0] = "Rudra";
document.write(a);
*/

//------------------Delete & Modifiy Arrays End----------------------------------

//------------------Sort & Reverse start----------------------------------
/*
var a = ["Vipin","Karan","Mahi","Rudra"];
document.write(a + "<br>");
a.sort();
document.write(a + "<br>");

a.reverse();
document.write(a);
*/


//------------------Sort & Reverse End----------------------------------

//------------------Object Start----------------------------------
/*
        var a = {

            fname : "Vipin",
            lname : "Kumar",
            email : "demo@gmail.com",
            movie : ["Mahi","Dhoom","Hum"], // Create the Array in object
            living : {
                "city" : "Ghaziabad",
                "Country" : "Bharat"
            },
            salary : function(){  // Create the funcation in object
                return 25000;
            }
        }
        document.write(a.living.city);  // Print object

        //document.write(a.movie[2]); // Print Array
       // document.write(a.salary()); // Print funcation
        //console.log(a);
*/


//------------------Object End----------------------------------


//------------------Object IInd method Start----------------------------------

/*
        var person =  new  Object();

        person.FirstName = "Vipin";
        person.LastName = "Kumar";
        person.age = 25;

        console.log(person);
        document.write(person.FirstName,person.LastName,person.age);
*/


//------------------Object IInd method End----------------------------------


//------------------Array of Objects Start----------------------------------

/*
    var student = [
        {name : 'Vipin', age : 28},
        {name : 'Rudra', age : 29},
        {name : 'veeru', age : 29},
    ];

    console.log(student);
   
    for(var a = 0; a < student.length; a++){
        document.write(student[a].name + " " + student[a].age);
    }
*/
//------------------Array of Objects End----------------------------------

//------------------Const Variable with Array & Objects Start----------------------------------
/*
const a = {
    name : "Vipin",
    lastname : "Kumar",
    age : 28
}


a.name = "Rudra";
a.lastname = "Bhagel";


console.log(a);
*/
//------------------Const Variable with Array & Objects End----------------------------------


//------------------For in Loop Start----------------------------------
/*
var obj = {
    fname : "Vipin",
    lname : "Kumar",
    age : 18
}

for(var i in obj){
    document.write(i + " " + obj[i] + "<br>");
}
*/

//------------------For in Loop End----------------------------------


//------------------ Map Method Start----------------------------------

/*
    var ary = [10,20,30,40,50];

    var b = ary.map(test);
    document.write(b);

    function test(x){
        return x * 10;
    }

*/

//------------------ Map Method End----------------------------------

//------------------ String Methods Start----------------------------------
/*
var str = "Vipin the great";  

//var a = str.length; //Length method
//var a = str.toLowerCase(); // lower case & uper case
var a = str.includes("the"); // find the word using includes output of true & false

document.write(a);
*/
//------------------ String Methods End----------------------------------

//------------------ Number Methods Start----------------------------------
/*
            var a = "50";

            var num =  Number(a);

            

            document.write(num / 2);  */
//------------------ Number Methods End----------------------------------

//------------------ Date Methods Start----------------------------------
/*
    var now  = new Date();

    document.write(now.getTime());
*/
//------------------ Date Methods End----------------------------------

//------------------ Event bulb on click----------------------------------
    


//------------------ Event bulb on clic----------------------------------