function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const result = document.getElementById('result');
  const bmiValueElement = document.getElementById('bmiValue');
  const interpretationElement = document.getElementById('interpretation');

  if (height > 0 && weight > 0) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(1);

    result.classList.add('show');
    bmiValueElement.textContent = bmiRounded;

    let interpretation = '';
    let color = '';

    if (bmi < 16) {
      interpretation = 'Выраженный дефицит массы тела - Ты не худой — ты визуальный баг.';
      color = '#dc2626';
    } else if (bmi >= 16 && bmi < 18.5) {
      interpretation = 'Недостаточная масса тела - Твоя тень весит больше тебя.';
      color = '#f59e0b';
    } else if (bmi >= 18.5 && bmi < 25) {
      interpretation = 'Норма';
      color = '#10b981';
    } else if (bmi >= 25 && bmi < 30) {
      interpretation = 'Избыточная масса тела (предожирение) - Думаю, тебе пора серьезно задуматься о салатах';
      color = '#f59e0b';
    } else if (bmi >= 30 && bmi < 35) {
      interpretation = 'Ожирение I степени - Думаю, тебе пора задуматься не о салатах, а о втором холодильнике. ';
      color = '#ea580c';
    } else if (bmi >= 35 && bmi < 40) {
      interpretation = 'Ожирение II степени - Когда ты падаешь, Земля проверяет, всё ли с ней в порядке.';
      color = '#dc2626';
    } else {
      interpretation = 'Ожирение III степени - Ты не набрал вес — ты перераспределил гравитацию вокруг себя.';
      color = '#991b1b';
    }

    interpretationElement.textContent = interpretation;
    bmiValueElement.style.color = color;
    interpretationElement.style.color = color;
    result.style.borderLeftColor = color;
  } else {
    result.classList.remove('show');
  }
}