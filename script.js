function calculate() {
    const inputValue = document.getElementById('inputNumber').value;
    const averageCalc = inputValue * 3.14;
    const lowCalc = averageCalc/2;
    const highCalc = lowCalc+averageCalc;

    document.getElementById('low').innerText = `Low: ${lowCalc}`;
    document.getElementById('average').innerText = `Average: ${averageCalc}`;
    document.getElementById('high').innerText = `High: ${highCalc}`;
}
