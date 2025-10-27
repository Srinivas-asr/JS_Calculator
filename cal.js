

function zer(){
    let a=document.getElementById('zer').value;
    document.getElementById('text').value += a;
}
function one(){
    let a=document.getElementById('one').value;
    document.getElementById('text').value += a;
}
function two(){
    let a=document.getElementById("two").value;
    document.getElementById("text").value+=a;
}
function thr(){
    let a=document.getElementById("thr").value;
    document.getElementById("text").value+=a;
}
function fou(){
    let a=document.getElementById("fou").value;
    document.getElementById("text").value+=a;
}
function fiv(){
    let a=document.getElementById("fiv").value;
    document.getElementById("text").value+=a;
}
function six(){
    let a=document.getElementById("six").value;
    document.getElementById("text").value+=a;
}
function sev(){
    let a=document.getElementById("sev").value;
    document.getElementById("text").value+=a;
}
function eig(){
    let a=document.getElementById("eig").value;
    document.getElementById("text").value+=a;
}
function nin(){
    let a=document.getElementById("nin").value;
    document.getElementById("text").value+=a;
}
function dot(){
    let a=document.getElementById("dot").value;
    document.getElementById("text").value+=a;
}

function add(){
    let a=document.getElementById("add").value;
    document.getElementById("text").value+=a;
}

function sub(){
    let a=document.getElementById("sub").value;
    document.getElementById("text").value+=a;
}

function mul(){
    let a=document.getElementById("mul").value;
    document.getElementById("text").value+=a;
}

function div(){
    let a=document.getElementById("div").value;
    document.getElementById("text").value+=a;
}
function mod(){
    let a=document.getElementById("mod").value;
    document.getElementById("text").value+=a;
}




function ent() {
      const input = document.getElementById("text").value.trim();
      
      // Regular expression to find operator (+, -, *, /)
      const operatorMatch = input.match(/[+\-*/%]/);

      if (!operatorMatch) {
        document.getElementById("result").value = "Enter Operator";
        return;
      }

      const operator = operatorMatch[0];
      var [a, b] = input.split(operator);

    //   switch(operator){
    //     case "+":
    //         document.getElementById("result").innerText=(Number(a)+Number(b));
    //     case "-":
    //         document.getElementById("result").innerText=(Number(a)-Number(b));
    //     case "*":
    //         document.getElementById("result").innerText=(Number(a)*Number(b));
    //     case "/":
    //         document.getElementById("result").innerText=(Number(a)/Number(b));

    //   }

    if(operator=="+"){
    document.getElementById("result").value=(Number(a)+Number(b));
    }
    else if(operator=="-"){
    document.getElementById("result").value=(Number(a)-Number(b));
    }
    else if(operator=="*"){
    document.getElementById("result").value=(Number(a)*Number(b));
    }
    else if(operator=="/"){
    document.getElementById("result").value=(Number(a)/Number(b));
    }
    else if(operator=="%"){
    document.getElementById("result").value=(Number(a)%Number(b));
    }



    //   document.getElementById("result").innerHTML =
    //     `Operator: ${operator}<br>Before: ${a}<br>After: ${b}`;
    }