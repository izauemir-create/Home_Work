const MAX_LENGTH = 100;

const textInput = document.getElementById('textInput');
const totalCount = document.getElementById('totalCount');
const remainingCount = document.getElementById('remainingCount');
const maxLimit = document.getElementById('maxLimit');

maxLimit.textContent = MAX_LENGTH;

function updateCounters() {
  const currentLength = textInput.value.length;
  const remaining = MAX_LENGTH - currentLength;

  totalCount.textContent = currentLength;
  remainingCount.textContent = remaining;
}

function enforceMaxLength(e) {
  const currentLength = textInput.value.length;

  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'Tab'];

  if (e.ctrlKey || e.metaKey) {
    return;
  }

  if (currentLength >= MAX_LENGTH && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
}

function handlePaste(e) {
  e.preventDefault();

  const pastedText = (e.clipboardData || window.clipboardData).getData('text');
  const currentText = textInput.value;
  const selectionStart = textInput.selectionStart;
  const selectionEnd = textInput.selectionEnd;
  const textBefore = currentText.substring(0, selectionStart);
  const textAfter = currentText.substring(selectionEnd);
  const newText = textBefore + pastedText + textAfter;

  if (newText.length > MAX_LENGTH) {
    const availableSpace = MAX_LENGTH - textBefore.length - textAfter.length;
    const trimmedPaste = pastedText.substring(0, Math.max(0, availableSpace));
    textInput.value = textBefore + trimmedPaste + textAfter;
  } else {
    textInput.value = newText;
  }

  updateCounters();
}

textInput.addEventListener('input', updateCounters);
textInput.addEventListener('keydown', enforceMaxLength);
textInput.addEventListener('paste', handlePaste);

updateCounters();