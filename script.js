document.getElementById('triangleForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
      document.getElementById('result').textContent = "Please enter valid positive numbers for base and height.";
      return;
    }
  
    const area = (base * height) / 2;
    document.getElementById('result').textContent = `The area of the triangle is: ${area.toFixed(2)} square units.`;
  });
  