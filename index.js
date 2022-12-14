// Code your solutions in this file
// Code your solutions in this file

let arrays = ["Charlie", "Samip", "Ali"];

function writeCards(array, events) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(`Thank you, ${array[i]}, for the wonderful ${events} gift!`);
  }
  return newArr;
}

writeCards(arrays, "birthday");

function countDown(num) {
  while (num >= 0) {
    console.log(num--);
  }
}

countDown(4);
