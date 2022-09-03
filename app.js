var initial = document.querySelector("#initial");
var quantity = document.querySelector("#quantity");
var current = document.querySelector("#current");
var check = document.querySelector(".check");
var output = document.querySelector(".output");
var error = document.querySelector(".error");
var clear = document.querySelector(".clear");
var body = document.querySelector(".container");
var emotion = document.querySelector(".emotion");

check.addEventListener("click", checkEventHandler);
clear.addEventListener("click", clearEventHandler);
emotion.style.display = "none";

function checkEventHandler() {
  if (initial.value != "" && quantity.value != "" && current.value != "") {
    if (initial.value > 0 && quantity.value > 0 && current.value > 0) {
      emotion.style.display = "none";
      error.style.display = "none";
      output.style.display = "block";
      if (Number(current.value) > Number(initial.value)) {
        var profit =
          (Number(current.value) - Number(initial.value)) *
          Number(quantity.value);
        var profitPercentage =
          (profit / (initial.value * quantity.value)) * 100;
        body.style.backgroundColor = "#86efac";
        output.style.color = "#16a34a";
        emotion.style.display = "none";
        output.innerText =
          "Hurray !! Your Profit is Rs " +
          profit.toFixed(2) +
          " and your Profit Percentage is " +
          profitPercentage.toFixed(2) +
          "% ✨🎉";
      } else if (Number(initial.value) > Number(current.value)) {
        var loss =
          (Number(initial.value) - Number(current.value)) *
          Number(quantity.value);
        var lossPercentage = (loss / (initial.value * quantity.value)) * 100;
        if (lossPercentage > 50) {
          emotion.style.display = "flex";
          body.style.backgroundColor = "#374151";
          output.style.color = "black";
          console.log("above 50");
          output.innerText =
            "Ohh !! Your Loss is Rs " +
            loss.toFixed(2) +
            " and your loss percentage is " +
            lossPercentage.toFixed(2) +
            "% 😩😢";
        } else {
          emotion.style.display = "none";
          body.style.backgroundColor = "#6b7280";
          output.style.color = "black";
          output.innerText =
            "Ohh !! Your Loss is Rs " +
            loss.toFixed(2) +
            " and your loss percentage is " +
            lossPercentage.toFixed(2) +
            "% 😓";
        }
      } else {
        body.style.backgroundColor = "#f0abfc";
        emotion.style.display = "none";
        output.innerText = "Ney !! Neither Profit nor Loss :)";
      }
    } else {
      emotion.style.display = "none";
      output.style.display = "none";
      error.style.display = "block";
      error.innerText = "Please enter all Positive values !!";
    }
  } else {
    output.style.display = "none";
    error.style.display = "block";
    error.innerText = "Please enter all the values";
    emotion.style.display = "none";
  }
}

function clearEventHandler() {
  body.style.backgroundColor = "#f0abfc";
  emotion.style.display = "none";
  error.textContent = "";
  output.textContent = "";
  initial.value = quantity.value = current.value = "";
}
