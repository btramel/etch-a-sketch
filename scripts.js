// sets important constants and variables
const container = document.getElementById('container');
let items = document.getElementsByClassName('grid-item');
let defaultSize = 16;

function makeRows(rows, cols) {
    // while c is less than the total area, create a div element
    // also adds text to the element
    // also adds classname "grid-item" to the element
    for ( c = 0; c < (rows * cols); c++ ) {
      let cell = document.createElement('div');
      cell.addEventListener('mouseover', function( event ) {
          event.target.style.backgroundColor = 'black';
      });
      container.appendChild(cell).className = 'grid-item';
    };
};

function reset() {
  // this removes the divs that were added initially, before starting over
  while (container.firstChild) {
    container.removeChild(container.lastChild);
}
  let newGridSize = prompt('How large a grid would you like to make?', 16);
  container.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;
  makeRows(newGridSize, newGridSize);
};

document.getElementById('freshStart').onclick = function() {
  reset();
};


// calls the function to defaultSize of 16 x 16
container.style.gridTemplateColumns = `repeat(${defaultSize}, 1fr)`;
makeRows(defaultSize, defaultSize);