// sets important constants and variables
const container = document.getElementById('container');
const item = document.getElementsByClassName('grid-item');
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
    //   cell.innerText = (c + 1);
      cell.addEventListener('mouseover', function( event ) {
          event.target.style.backgroundColor = 'black';
          event.target.style.color = 'black';
      });
      container.appendChild(cell).className = 'grid-item';
    };

       //   reset etch-a-sketch
      item.style.setProperty('backgroundColor', white);
      item.style.setProperty('color', white);
      
};

function reset() {
    newGridSize = prompt('How large a grid would you like?');
    makeRows(newGridSize, newGridSize);
};

document.getElementById('freshStart').onclick = function() {
     reset()
};


// calls the function to defaultSize of 16 x 16
makeRows(defaultSize, defaultSize);