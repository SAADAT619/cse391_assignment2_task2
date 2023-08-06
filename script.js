function convert() {
    const weightInput = document.getElementById('weight');
    const unitSelect = document.getElementById('unit');
    const resultSpan = document.getElementById('result');
    
    const weight = parseFloat(weightInput.value);
    const unit = unitSelect.value;
    
    if (isNaN(weight)) {
        resultSpan.innerText = "Please enter a valid number";
        return;
    }
    
    let convertedWeight, resultText;
    
    if (unit === "kg") {
        convertedWeight = weight * 2.2046;
        resultText = `${weight} kilograms is approximately ${convertedWeight.toFixed(2)} pounds`;
    } else if (unit === "lb") {
        convertedWeight = weight * 0.4536;
        resultText = `${weight} pounds is approximately ${convertedWeight.toFixed(2)} kilograms`;
    } else {
        resultText = "Invalid unit";
    }
    
    resultSpan.innerText = resultText;
}
