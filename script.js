var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var array = [];
var arraySize = 30;
var arrayMax = 30;
var arrayMin = 1;

var width = canvas.width;
var height = canvas.height;

var barWidth = width / arraySize;
var barHeight = height / arrayMax;

var delay = 50;

function initArray() {
    for (var i = 0; i < arraySize; i++) {
        array[i] = Math.floor(Math.random() * (arrayMax - arrayMin + 1)) + arrayMin;
    }
}

function drawArray() {
    ctx.clearRect(0, 0, width, height);
    for (var i = 0; i < arraySize; i++) {
        ctx.fillRect(i * barWidth, height - array[i] * barHeight, barWidth, array[i] * barHeight);
    }
}

function bubbleSort() {
    var i = 0;
    var j = 0;
    var temp = 0;
    var interval = setInterval(function() {
        if (i < arraySize) {
            if (j < arraySize - i - 1) {
                if (array[j] > array[j + 1]) {
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
                j++;
            } else {
                i++;
                j = 0;
            }
            drawArray();
        } else {
            clearInterval(interval);
        }
    }, delay);
}

initArray();
drawArray();