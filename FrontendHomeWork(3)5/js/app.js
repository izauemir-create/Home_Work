function runAllTasks() {
  const dollars = [100, 150, 200, 250, 300, 350];
  const exchangeRate = 87;
  const soms = dollars.map(dollar => dollar * exchangeRate);
  document.getElementById('task1').innerHTML = `
                <div class="result-item"><span class="label">Доллары:</span> ${dollars.join(', ')}</div>
                <div class="result-item"><span class="label">Сомы (курс ${exchangeRate}):</span> ${soms.join(', ')}</div>
            `;

  const grades = [5, 4, 3, 4, 5, 3, 4, 3, 4, 5, 5];
  const europeanGrades = grades.map(grade => {
    if (grade === 5) return 'A';
    if (grade === 4) return 'B';
    if (grade === 3) return 'C';
  });
  document.getElementById('task2').innerHTML = `
                <div class="result-item"><span class="label">Оценки:</span> ${grades.join(', ')}</div>
                <div class="result-item"><span class="label">Европейский формат:</span> ${europeanGrades.join(', ')}</div>
            `;

  const phoneNumbers = [
    "0700 123 456", "0770 234 567", "0550 345 678",
    "0551 456 789", "0555 567 890", "0705 678 901",
    "0707 789 012", "0755 890 123", "0500 901 234",
    "0505 012 345"
  ];
  const megaNumbers = phoneNumbers.filter(phone => phone[2] === '5');
  document.getElementById('task3').innerHTML = `
                <div class="result-item"><span class="label">Всего номеров:</span> ${phoneNumbers.length}</div>
                <div class="result-item"><span class="label">Номера МЕГА:</span> ${megaNumbers.join(', ')}</div>
            `;

  const carNumbers = [
    "01 KG 123 ABC", "02 KG 456 DEF", "03 KG 789 GHI",
    "01 KG 321 JKL", "05 KG 654 MNO", "06 KG 987 PQR",
    "07 KG 111 STU", "01 KG 222 VWX", "09 KG 333 YZA",
    "01 KG 444 BCD"
  ];
  const bishkekNumbers = carNumbers.filter(car => car.startsWith("01"));
  document.getElementById('task4').innerHTML = `
                <div class="result-item"><span class="label">Всего номеров:</span> ${carNumbers.length}</div>
                <div class="result-item"><span class="label">Номера Бишкека:</span> ${bishkekNumbers.join(', ')}</div>
            `;

  const cards = [
    "9500987698769876", "5105105105105100", "4111111111111111",
    "9500111122223333", "4012888888881881", "5555555555554444",
    "9500123412341234", "4222222222222", "5454545454545454"
  ];
  const cardTypes = cards.map(card => {
    if (card[0] === '4') return 'VISA';
    if (card[0] === '5') return 'MASTERCARD';
    if (card[0] === '9') return 'ELCARD';
  });
  document.getElementById('task5').innerHTML = `
                <div class="result-item"><span class="label">Типы карт:</span> ${cardTypes.join(', ')}</div>
            `;

  const emails = [
    "support.team@mail.ru", "alex.petrov@gmail.com",
    "sergey.ivanov@yandex.ru", "example123@mail.ru",
    "john.doe@gmail.com", "anna_k@yandex.ru",
    "user.mail@mail.ru", "irina_smith@gmail.com",
    "dev.test@yandex.ru"
  ];
  const gmailOnly = emails.filter(email => email.endsWith('gmail.com'));
  document.getElementById('task6').innerHTML = `
                <div class="result-item"><span class="label">Всего почт:</span> ${emails.length}</div>
                <div class="result-item"><span class="label">Gmail почты:</span> ${gmailOnly.join(', ')}</div>
            `;
}

runAllTasks();