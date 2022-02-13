var initial = document.querySelector("#initial");
var quantity = document.querySelector("#quantity");
var current = document.querySelector("#current");
var check = document.querySelector(".check");
var output = document.querySelector(".output");
var error = document.querySelector(".error");
var clear = document.querySelector(".clear");
var body = document.querySelector(".container");


check.addEventListener("click", checkEventHandler);
clear.addEventListener("click", clearEventHandler);

function checkEventHandler(){
  if(initial.value != "" && quantity.value!="" && current.value!="")
  { error.style.display = "none";
    output.style.display = "block";
    if(Number(current.value) > Number(initial.value)){
      var profit = (Number(current.value) - Number(initial.value))*Number(quantity.value);
      var profitPercentage = (profit/ ((initial.value)* (quantity.value)))*100;
      
      output.style.color = "#16a34a"
      output.innerText = "Hurray !! Your Profit is Rs "+ profit.toFixed(2) + " and your Profit Percentage is "+ profitPercentage.toFixed(2) +"%";
      }else if(Number(initial.value) > Number(current.value)){
      var loss = (Number(initial.value) - Number(current.value))*Number(quantity.value);
      var lossPercentage = (loss / ((initial.value) * (quantity.value))) * 100;
      if(lossPercentage > 50){
      body.style.backgroundColor = "grey"
      output.style.color = "#0284c7"
      output.innerText = "Ohh !! Your Loss is Rs "+ loss.toFixed(2)+" and your loss percentage is "+ lossPercentage.toFixed(2) +"%"
      }
      else {
      body.style.backgroundColor = "#f0abfc"
      output.style.color = "#0284c7"
      output.innerText = "Ohh !! Your Loss is Rs "+ loss.toFixed(2)+" and your loss percentage is "+ lossPercentage.toFixed(2) +"%"
      }

      
      } else{
      output.innerText = "Ney !! Neither Profit nor Loss :)";
    }

  }else{
    output.style.display = "none";
    error.style.display = "block";
    error.innerText = "Please enter all the values";
  }
}

function clearEventHandler(){
  window.location.reload();
}