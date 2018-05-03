//Functionality of the Preset Buttons are coming soon!
let pixelCanvas, colorInput, sizePicker, eraser, reset;
	pixelCanvas = $('#pixelCanvas');
	colorInput = $('#colorPicker');
	sizePicker = $('#sizePicker');
	eraser = $('#eraser');
	reset = $('#reset');

// When size is submitted by the user, call makeGrid()
sizePicker.submit(function(evt){
	makeGrid();
	paint();
	evt.preventDefault();
	});

//function makeGrid()
function makeGrid() {
	pixelCanvas.children().remove();
	let height = $('#inputHeight').val();
	let width = $('#inputWeight').val();
	let tableRows = '';
	let row = 1;
	while (row <= height) {
			tableRows += '<tr>';
			for (let col=1; col <= width; col++) {
					tableRows += '<td></td>';
			}
			tableRows += '</tr>';
			row += 1;
	} // end while loop
	pixelCanvas.append(tableRows); // add grid to DOM
}

//ADDING ABILITY TO CHANGE COLORS AND EVENT LISTENERS TO CHANGE COLOR AND DRAW
let draw = true;
eraser.click(function(){
	draw = false;
	});
colorInput.click(function(){
	draw = true;
});
colorInput.change(paint); //allows user to change color and continue drawing on grid
function paint(){
	let colorSet = colorInput.val();
	let tableCell = $('#pixelCanvas td');
	tableCell.on('mousedown mouseover', function(evt) {
		evt.preventDefault();
		if (draw) {
			if (evt.buttons === 1) {
			  $(evt.target).css( 'background-color', colorSet);
			}
	  	}
		else {
			if (evt.buttons === 1) {
			  $(evt.target).css( 'background-color', '#fff');
			}
	  	}
	});
}
//Allows grid to be reset!
function cleanGrid(){
  $("#pixel_canvas tr").remove();
}
$("#reset").on("click", function(){
  makeGrid();
	cleanGrid();
	paint();
	evt.preventDefault();
});
//Double-click to remove color.
pixelCanvas.on('dblclick', 'td', function(event) {
  $(event.target).css('background-color', 'white');
});
