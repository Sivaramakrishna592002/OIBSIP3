const temperatureinput = document.querySelector(".temperatureinput input");
const temperatureoutput = document.querySelector(".temperatureoutput input");
const temperatureinputunit = document.querySelector(".temperatureinput select");
const temperatureoutputunit = document.querySelector(".temperatureoutput select");

temperatureinput.oninput = function () {
  let temperatureinputvalue = parseFloat(temperatureinput.value);
  let temp = 0;
  let temperatureinputunitvalue = temperatureinputunit.value;
  let temperatureoutputunitvalue = temperatureoutputunit.value;

  if (temperatureinputunitvalue === "Celsius" && temperatureoutputunitvalue === "Fahrenheit") {
    temp = (temperatureinputvalue * 9/5) + 32;
    temperatureoutput.value = temp.toFixed(2);
  } else if (temperatureinputunitvalue === "Celsius" && temperatureoutputunitvalue === "Kelvin") {
    temp = temperatureinputvalue + 273.15;
    temperatureoutput.value = temp.toFixed(2);
  } else if (temperatureinputunitvalue === "Fahrenheit" && temperatureoutputunitvalue === "Celsius") {
    temp = (temperatureinputvalue - 32) * 5/9;
    temperatureoutput.value = temp.toFixed(2);
  } else if (temperatureinputunitvalue === "Fahrenheit" && temperatureoutputunitvalue === "Kelvin") {
    temp = (temperatureinputvalue - 32) * 5/9 + 273.15;
    temperatureoutput.value = temp.toFixed(2);
  } else if (temperatureinputunitvalue === "Kelvin" && temperatureoutputunitvalue === "Celsius") {
    temp = temperatureinputvalue - 273.15;
    temperatureoutput.value = temp.toFixed(2);
  } else if (temperatureinputunitvalue === "Kelvin" && temperatureoutputunitvalue === "Fahrenheit") {
    temp = temperatureinputvalue * 9/5 - 459.67;
    temperatureoutput.value = temp.toFixed(2);
  } else if (temperatureinputunitvalue === temperatureoutputunitvalue) {
    temperatureoutput.value = temperatureinputvalue;
  }
};
