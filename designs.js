// Select color input
const selectSize = document.querySelector('form'); // #sizePicker or form can go into the bracket
const selectColor = document.querySelector('#colorPicker');
const artBoard = document.querySelector('#pixelCanvas');


// When size is submitted by the user, call makeGrid()
selectSize.addEventListener('submit', function (call) {
    call.preventDefault();
    makeGrid();
})

// Getting height and width input values
function makeGrid() {
    let providedHeight = document.querySelector('#inputHeight').value;
    let prodivedWidth = document.querySelector('#inputWidth').value;

    // This clears any existing grids
    while (artBoard.firstElementChild) {
        artBoard.removeChild(artBoard.firstElementChild)
    }

    //creates grid boxes
    // creates rows equivalent to the given height
    for (let row = 0; row < providedHeight; row++){
        let tableRow = document.createElement('tr');
        pixelCanvas.append(tableRow);
        // creates cells equivalent to the given width
        for (let box = 0; box < providedWidth; box++) {
            let tableBox = document.createElement('td')
            tableRow.append(tableBox);

            tableBox.addEventListener('click', function() { // adds chosen color on each click
                tableBox.style.backgroundColor = selectColor.value;
            })
        }


    }

}
