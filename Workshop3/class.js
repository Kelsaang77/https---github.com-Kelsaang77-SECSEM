// Define the object
const acceptGreaterThanTen = {
    // Define the function that checks the input
    checkInput: function(x) {
      if (x > 10) {
        return "Accepted!";
      } else {
        return "Rejected!";
      }
    }
  }
  
  // Example usage
  console.log(acceptGreaterThanTen.checkInput(15)); // Outputs "Accepted!"
  console.log(acceptGreaterThanTen.checkInput(5)); // Outputs "Rejected!"
  
//2
function calculateTotal(numbers, callback) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total = callback(total, numbers[i]);
    }
    return total;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  
  const add = (total, number) => total + number;
  const subtract = (total, number) => total - number;
  const multiply = (total, number) => total * number;
  
  const sum = calculateTotal(numbers, add); // Returns 15
  const difference = calculateTotal(numbers, subtract); // Returns -13
  const product = calculateTotal(numbers, multiply); // Returns 120
  
  console.log(sum);
  console.log(difference);
  console.log(product);
  
//3

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const xmlDoc = this.responseXML;
    const table = xmlDoc.getElementsByTagName("table")[0];
    const rows = table.getElementsByTagName("tr");
    
    // Loop through each row in the table and log the data in the console
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td");
      let rowData = "";
      for (let j = 0; j < cells.length; j++) {
        rowData += cells[j].textContent + " ";
      }
      console.log(rowData);
    }
  }
};

xhr.open("GET", "table.txt", true);
xhr.send();
