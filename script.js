function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultElement = document.getElementById('result');
  
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
      resultElement.textContent = "Pastikan kedua sisi diisi dengan angka yang valid";
      return;
    }
  
    const area = (base * height) / 2;
    resultElement.textContent = `Luas segitiga: ${area.toFixed(2)}`;
  }
  
  // Event listeners for real-time update
  document.getElementById('base').addEventListener('input', calculateArea);
  document.getElementById('height').addEventListener('input', calculateArea);
  