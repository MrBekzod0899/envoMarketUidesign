 var a = document.getElementById("a");
 var b = document.getElementById("b");
 var answer = document.getElementById("result")

 function AddtwoNumbers() {
     var result = parseFloat(a.value) + parseFloat(b.value);
     answer.innerText = result;
 }


 function isClick(a) {
     console.log(a);
     console.log("fdsf");
     document.getElementById("cal").value += a.innerText;

 }


 function uchirish(b) {
     var b = " ";
     document.getElementById("cal").value -= b.innerText;
 }
 var one = document.getElementById("one");
 var two = document.getElementById("two");
 var three = document.getElementById("three");
 var four = document.getElementById("four");
 var five = document.getElementById("five");
 var six = document.getElementById("six");
 var seven = document.getElementById("seven");
 var eight = document.getElementById("eight");
 var nine = document.getElementById("nine");
 var zero = document.getElementById("zero");

 function clear() {
     document.getElementById("cal").value = "";
 }