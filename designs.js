// Select color input
const sizePicker = document.querySelector('form'); // sizePicker or form can go into the bracket
const colorPicker = document.querySelector('#colorPicker');
const pixelCanvas = document.querySelector('#pixelCanvas');


// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid();
})

// Getting height and width input values
function makeGrid() {
    let inputHeight = document.querySelector('#inputHeight').value;
    let inputWidth = document.querySelector('#inputWidth').value;

    // This clears any existing grids
    while (pixelCanvas.firstElementChild) {
        pixelCanvas.removeChild(pixelCanvas.firstElementChild)
    }

    //creates grid boxes
    // creates rows equivalent to the given height
    for (let row = 0; row < inputHeight; row++){
        let tableRow = document.createElement('tr');
        pixelCanvas.appendChild(tableRow);
        // creates cells equivalent to the given width
        for (let box = 0; box < inputWidth; box++) {
            let tableBox = document.createElement('td')
            tableRow.appendChild(tableBox);

            tableBox.addEventListener('click', function() { // adds chosen color on each click
                tableBox.style.backgroundColor = colorPicker.value;
            })
        }


    }

}
