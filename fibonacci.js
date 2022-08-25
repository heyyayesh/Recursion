// Iterative solution
const fibs = n => {
  if (n === 0) return [];
  if (n === 1) return [0];

  arr = [0, 1];

  let x = arr[0];
  let y = arr[1];

  for (let i = 0; i < n - 2; i++) {
    let z = x + y;
    arr.push(z);
    x = y;
    y = z;
  }

  return arr;
};
console.log(fibs(8));

// Recursive solution
const fibsRec = n => {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  return fibsRec(n - 1).concat(fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]);
};
console.log(fibsRec(8));
