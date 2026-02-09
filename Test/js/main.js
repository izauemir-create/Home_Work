const containsOnlyDigits = (str) => {
  return /^\d+$/.test(str);
}

console.log(containsOnlyDigits("12345")); // true
console.log(containsOnlyDigits("12a45")); // false

const repeatMessage = () => {
  let counter = 0;
  setInterval(() => {
    counter++;
    console.log("Прошла секунда");
  }, 777);
}

repeatMessage();

const count = () => {
  let i = 1;
  const interval = setInterval(() => {
    console.log(i);
    if (i === 10) {
      clearInterval(interval);
    }
    i++;
  }, 777);
}

count();

const box = document.getElementById('boxBox_box');

box.addEventListener('click', () => {
  box.classList.toggle('active');
});