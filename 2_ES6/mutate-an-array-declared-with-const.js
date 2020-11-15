const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line
  // Using s = [2, 5, 7] would be invalid
  let a = s.pop();
  s.unshift(a);
  // Only change code above this line
}
editInPlace();
