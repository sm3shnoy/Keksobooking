const getRandomNumber = (min = 0, max, num) => {
  if (min < 0 || max < 0) {
    console.log("Одно из значений меньше нуля! Попробуйте снова.");
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  if (max === 0) {
    console.log(
      "Максимальное значение равно нулю! Введите положительное значение."
    );
    return -1;
  }

  return (Math.random() * (max - min) + min).toFixed(num);
};

console.log(getRandomNumber(1.1, 1.2, 5));
