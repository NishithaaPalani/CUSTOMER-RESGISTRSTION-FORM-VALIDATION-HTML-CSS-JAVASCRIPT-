
function fname(){
//Nishithaa PALANI________20181CSE0490_______07CSE08//
var fname = document.getElementById('fname').value;
var check = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
let isTrue = true;
if(!check.test(fname)){
alert("First Name must Contain Only Alphabets \n and must atleast 4 characters");
isTrue = false;
}
if(isTrue) return true;
else return false;
}
function lname(){
var lname = document.getElementById('lname').value;
var check=/^[a-zA-Z]+$/;
let isTrue=true;
if(!check.test(lname)){
alert("Last name should contain at least one character");
isTrue = false;
}
if(isTrue) return true;
else return false;
}
function pass(){
NISHITHAA PALANI IT ENDTERM LAB EXAM 20181CSE0490
6
var pass = document.getElementById('pass').value;
let Check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,14}$/;
let isTrue = true;
if(!Check.test(pass)){
alert("password should be greater than 8 to 14, \nand it should contain one special 
character, \none capital letter");
isTrue = false;
}
if(isTrue) return true;
else return false;
}
function cvv(){
var cvv = document.getElementById('cvv').value;
var check = /^\d{3}$/;
let isTrue = true;
if(!check.test(cvv)){
alert("CVV number to be three digits");
isTrue = false;
}
if(isTrue) return true;
else return false;
}
 Function Validate()
 {
 var e = document.getElementById("ddlView");
 var strUser = e.options[e.selectedIndex].value;
 var strUser1 = e.options[e.selectedIndex].text;
 if(strUser==0)
 {
 alert("Please select a user");
 }
 }
function submitBtn(){
fname();
lname();
pass();
cvv();
 Validate();
if(fname() && lname() && pass() && cvv() && validate(){
alert("RESGISTRSTION FORM SUBMITTED SUCCESSFULLY!!!");
return true;
}
else{
return false;
}
}