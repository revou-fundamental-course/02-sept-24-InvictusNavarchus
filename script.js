function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultElement = document.getElementById('result');
  
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
      resultElement.textContent = "Please enter valid positive numbers for base and height.";
      return;
    }
  
    const area = (base * height) / 2;
    resultElement.textContent = `The area of the triangle is: ${area.toFixed(2)} square units.`;
  }
  
  // Event listeners for real-time update
  document.getElementById('base').addEventListener('input', calculateArea);
  document.getElementById('height').addEventListener('input', calculateArea);
  