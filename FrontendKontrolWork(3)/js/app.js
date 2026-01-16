let currentOpenIndex = -1;

function toggleAccordion(index) {
  const content = document.getElementById('content-' + index);
  const button = document.getElementById('button-' + index);

  if (currentOpenIndex === index) {
    content.classList.remove('active');
    button.classList.remove('active');
    button.textContent = '+';
    currentOpenIndex = -1;
  } else {
    if (currentOpenIndex !== -1) {
      const prevContent = document.getElementById('content-' + currentOpenIndex);
      const prevButton = document.getElementById('button-' + currentOpenIndex);
      prevContent.classList.remove('active');
      prevButton.classList.remove('active');
      prevButton.textContent = '+';
    }

    content.classList.add('active');
    button.classList.add('active');
    button.textContent = '+';
    currentOpenIndex = index;
  }
}

function createSnowflakes() {
  const snowflakeCount = 50;
  const snowflakes = ['❄', '❅', '❆'];

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDuration = (Math.random() * 3 + 5) + 's';
    snowflake.style.animationDelay = Math.random() * 5 + 's';
    snowflake.style.fontSize = (Math.random() * 0.5 + 0.5) + 'em';
    snowflake.style.opacity = Math.random() * 0.6 + 0.4;
    document.body.appendChild(snowflake);
  }
}

createSnowflakes();