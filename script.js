const euro = document.getElementById("valueEUR");
const bresil = document.getElementById("valueRB");
const btn = document.getElementById("btn");
const resultRB = document.getElementById("resultRB");
const resultEUR = document.getElementById("resultEUR");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  if ((euro.value == 0) | (euro.value == null)) {
    resultRB.innerText = "";
  } else {
    const euroNumber = Number(euro.value) * 5.6306;
    resultRB.innerText = Math.round(euroNumber * 100) / 100 + " R$ 🇧🇷";
  }

  if ((bresil.value == 0) | (bresil.value == null)) {
    resultEUR.innerText = "";
  } else {
    const rbNumber = Number(bresil.value) * 0.18;
    resultEUR.innerText = Math.round(rbNumber * 100) / 100 + " € 🇪🇺";
  }
});
