// sets important constants and variables
const container = document.getElementById('container');
let defaultSize = 16;

function makeRows(rows, cols) {
    // enters container div, sets the "--grid-rows" variable equal to "rows"
    // same for --grid-cols and cols
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    // while c is less than the total area, create a div element
    // also adds text to the element
    // also adds classname "grid-item" to the element
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement('div');
      cell.innerText = (c + 1);
      container.appendChild(cell).className = 'grid-item';
    };
  };
  
  // calls the function to defaultSize of 16 x 16
  makeRows(defaultSize, defaultSize);