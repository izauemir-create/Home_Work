let count = 0;
const counterDisplay = document.getElementById('counter');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
  counterDisplay.textContent = count;

  counterDisplay.classList.remove('gray', 'green', 'red');

  if (count > 0) {
    counterDisplay.classList.add('green');
  } else if (count < 0) {
    counterDisplay.classList.add('red');
  } else {
    counterDisplay.classList.add('gray');
  }
}

plusBtn.addEventListener('click', function() {
  count++;
  updateDisplay();
});

minusBtn.addEventListener('click', function() {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', function() {
  count = 0;
  updateDisplay();
});