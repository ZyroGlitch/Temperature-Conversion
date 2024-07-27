const number = document.getElementById('number');
const convertBtn = document.getElementById('convertBtn');
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const output = document.getElementById('output');

convertBtn.onclick = function () {
    let getInput = Number(number.value);
    let result;

    if (celsius.checked) {
        result = (getInput * (9 / 5)) + 32;
        output.textContent = `${result.toFixed(2)} °F`;

    } else if (fahrenheit.checked) {
        result = (getInput - 32) * (5 / 9);
        output.textContent = `${result.toFixed(2)} °C`;
    }
}

