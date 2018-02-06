// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  // Your code goes here!
	var Canvas, Cell, FrameHeight, FrameWidth, Table;

	Canvas = $('#pixelCanvas');
	FrameHeight = $('#inputHeight').val();
	FrameWidth = $('#inputWeight').val();

	Canvas.children().remove()

	for (x = 0; x < FrameHeight; x++) {
	Canvas.append('<tr></tr>');
	}

	Table = $('tr');

	for (y = 0; y < FrameWidth; y++) {
	Table.append('<td></td>');
	}

	Cell = Canvas.find('td');

	Cell.click(function() {
		console.log("changeColor is running!");
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});

}

var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});
