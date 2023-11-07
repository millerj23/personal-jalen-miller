// Jalen Miller
// Chapter 4

// Problem #1 - Reversing an array

function reverseArray(Letarray) {
    let output = [];
    for (let i = Letarray.length - 1; i >= 0; i--) {
      output.push(Letarray[i]);}
    return output;}
  
  function reverseArrayInPlace(Letarray) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = Letarray[i];
      Letarray[i] = Letarray[array.length - 1 - i];
      Letarray[array.length - 1 - i] = old;}
    return Letarray;}

  console.log(reverseArray(["A", "B", "C", "D", "E", "F"]));


