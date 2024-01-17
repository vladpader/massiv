// Стрелочная функция, выводящая элементы массива поочередно в консоль
const massiv = (num) => {
    for (let i = 0; i < num.length; i++) {
      console.log(num[i]);
    }
  }
  
  // Пример использования функции с массивом длиной 5
  const myArray = [1, 2, 3, 4, 5];
  massiv(myArray);