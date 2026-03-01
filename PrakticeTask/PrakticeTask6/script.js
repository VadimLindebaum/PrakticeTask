// Accepts any number of numeric amount parameters and returns their sum
function groceryTracker() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    var n = parseFloat(arguments[i]);
    if (!isNaN(n)) total += n;
  }
  return total;
}

// Reads values from inputs, calls groceryTracker, and updates the page
function calculateTotal() {
  var a = document.getElementById('grocery1').value;
  var b = document.getElementById('grocery2').value;
  var c = document.getElementById('grocery3').value;
  var total = groceryTracker(a, b, c);
  // Format to 2 decimal places
  document.getElementById('result').textContent = 'The total amount is : $ ' + total.toFixed(2);
}

document.getElementById('calcBtn').addEventListener('click', calculateTotal);
