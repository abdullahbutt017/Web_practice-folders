
function addition() {
    let x=document.getElementById("first number").value;
  
    let y=document.getElementByID("Secondnumber").value;

    let result=parseInt(x)+parseInt(y);;

    document.getElementById("result").innerHTML=result;


 } 

/*
         function addition()
         {
 let x=document.getElementById("input1").value;
 let y=document.getElementById("input2").value;
 let result=parseInt(x)+parseInt(y);
 document.getElementById("result").innerHTML=result;
         }
         function subtraction()
         {
 let x=document.getElementById("input1").value;
 let y=document.getElementById("input2").value;
 let result=parseInt(x)-parseInt(y);
 document.getElementById("result").innerHTML=result;
         }
         function multiplication()
         {
 let x=document.getElementById("input1").value;
 let y=document.getElementById("input2").value;
 let result=parseInt(x)*parseInt(y);
 document.getElementById("result").innerHTML=result;
         }
         function percentage()
         {
 let x=document.getElementById("input1").value;
 let y=document.getElementById("input2").value;
 let result=parseInt(x)%parseInt(y);
 document.getElementById("result").innerHTML=result;
         }
         function division()
         {
 let x=document.getElementById("input1").value;
 let y=document.getElementById("input2").value;
 let result=parseInt(x)/parseInt(y);
 document.getElementById("result").innerHTML=result;
         }
         function decrement()
         {
 let x=document.getElementById("input1").value;
 let result=x-1;
 document.getElementById("result").innerHTML=result;
         }
         function increment()
         {
 let x=document.getElementById("input1").value;
 let result=parseInt(x)+1;
 document.getElementById("result").innerHTML=result;
         }
         function exponent()
         {
 let x=document.getElementById("input1").value;
 let y=document.getElementById("input2").value;
 let result=parseInt(x)**parseInt(y);
 document.getElementById("result").innerHTML=result;
         }
 
        
     </script>
     
         <h1>ARTHIMITIC CALCULATOR</h1>
         <label>Input1:</label>
         <input type="number" id="input1"><br><br>
         <label>Input2:</label>
         <input type="number" id="input2"><br><br>
         <button onclick="addition()">+</button>
         <button onclick="subtraction()">-</button>
         <button onclick="multiplication()">*</button>
         <button onclick="percentage()">%</button>
         <button onclick="division()">/</button>
         <button onclick="decrement()">--</button>
         <button onclick="increment()">++</button>
         <button onclick="exponent()">**</button><br><br>
         <label>Result:</label>
         <p id="result"></p><br><br>
     */