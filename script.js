// Get the canvas element
var canvas = document.getElementById("canvas");
// Get the canvas context
var ctx = canvas.getContext("2d");
// Set the canvas background color
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, canvas.width, canvas.height);
// Set the canvas text color
ctx.fillStyle = "#FFFFFF";
// Set the canvas text font
ctx.font = "20px Arial";
// Set the canvas text alignment
ctx.textAlign = "center";
// Set the canvas text baseline
ctx.textBaseline = "middle";
// Set the canvas text position
ctx.fillText("Sorting Visualized", canvas.width / 2, canvas.height / 2);
