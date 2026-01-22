const inputWrapper = document.getElementById('inputWrapper');
const phoneInput = document.getElementById('phoneInput');
const hoverText = document.getElementById('hoverText');
const result = document.getElementById('result');

let isInputFocused = false;

inputWrapper.addEventListener('mouseenter', () => {
  phoneInput.classList.add('visible');
  hoverText.classList.add('hidden');
});

inputWrapper.addEventListener('mouseleave', () => {
  if (!isInputFocused) {
    phoneInput.classList.remove('visible');
    hoverText.classList.remove('hidden');
  }
});

phoneInput.addEventListener('focus', () => {
  isInputFocused = true;
  phoneInput.classList.add('visible');
  hoverText.classList.add('hidden');
});

phoneInput.addEventListener('blur', () => {
  isInputFocused = false;
  setTimeout(() => {
    if (!isInputFocused) {
      phoneInput.classList.remove('visible');
      hoverText.classList.remove('hidden');
    }
  }, 100);
});

inputWrapper.addEventListener('click', () => {
  phoneInput.focus();
});

function detectOperator() {
  const phoneNumber = phoneInput.value;

  if (!phoneNumber) {
    result.classList.remove('show');
    return;
  }

  const cleanNumber = phoneNumber.replace(/\D/g, '');

  let operator = {
    name: 'Неизвестно',
    color: '#6b7280',
    icon: '❓',
    bg: '#f3f4f6',
  };

  const prefix = cleanNumber.substring(0, 3);

  // O!
  if (['500', '501', '502', '504', '505', '507', '508', '509', '700', '701', '702', '703', '704', '706', '707', '708', '709'].includes(prefix)) {
    operator = {name: 'O!', color: '#e30611', icon: '🔴', bg: '#fce7e9'};
  }
  // Мегаком
  else if (['999', '997', '995', '990', '755', '550', '551', '552', '553', '554', '555', '556', '557', '558', '559'].includes(prefix)) {
    operator = {name: 'Мегаком', color: '#00b956', icon: '🟢', bg: '#d1fae5'};
  }
  // Билайн
  else if (['220', '221', '222', '223', '224', '225', '227', '770', '771', '772', '773', '774', '775', '776', '777', '778', '779'].includes(prefix)) {
    operator = {name: 'Билайн', color: '#fed100', icon: '🟡', bg: '#fef3c7'};
  }

  result.innerHTML = `
    <div class="operator-icon">${operator.icon}</div>
    <div class="operator-name" style="color: ${operator.color}">${operator.name}</div>
    <div class="phone-display">${phoneNumber}</div>
  `;
  result.style.backgroundColor = operator.bg;
  result.style.borderColor = operator.color;
  result.classList.add('show');
}

phoneInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    detectOperator();
  }
});

phoneInput.addEventListener('input', detectOperator);