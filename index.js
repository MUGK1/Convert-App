/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("convert-el");
const answerEl = document.getElementById("answer-el-1");
const answerEl2 = document.getElementById("answer-el-2");
const answerEl3 = document.getElementById("answer-el-3");

inputEl.addEventListener("input", function () {
  inputEl.value = inputEl.value.slice(0, 2);
});

btnEl.addEventListener("click", function () {
  const value = inputEl.value;

  const lengthMeter = (value * 3.281).toFixed(3);
  const lengthFeet = (value / 3.281).toFixed(3);

  const volumeLiters = (value * 0.264).toFixed(3);
  const volumeGallons = (value / 0.264).toFixed(3);

  const massKilo = (value * 2.204).toFixed(3);
  const massPounds = (value / 2.204).toFixed(3);

  answerEl.textContent = `${value} meters = ${lengthMeter} feet | ${value} feet = ${lengthFeet} meters`;
  answerEl2.textContent = `${value} liters = ${volumeLiters} gallons | ${value} gallons = ${volumeGallons} liters`;
  answerEl3.textContent = `${value} kilos = ${massKilo} pounds | ${value} pounds = ${massPounds} kilos`;

  inputEl.value = "";
});
