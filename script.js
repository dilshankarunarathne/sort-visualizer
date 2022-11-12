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

function insertionSort() {
    var i = 1;
    var j = 0;
    var temp = 0;
    var interval = setInterval(function() {
        if (i < arraySize) {
            if (j >= 0) {
                if (array[j] > array[j + 1]) {
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
                j--;
            } else {
                i++;
                j = i - 1;
            }
            drawArray();
        } else {
            clearInterval(interval);
        }
    }, delay);
}

function mergeSort() {
    var i = 0;
    var j = 0;
    var k = 0;
    var temp = [];
    var interval = setInterval(function() {
        if (i < arraySize) {
            if (j < arraySize) {
                if (k < arraySize) {
                    if (array[j] < array[k]) {
                        temp[i] = array[j];
                        j++;
                    } else {
                        temp[i] = array[k];
                        k++;
                    }
                    i++;
                } else {
                    temp[i] = array[j];
                    i++;
                    j++;
                }
            } else {
                temp[i] = array[k];
                i++;
                k++;
            }
            drawArray();
        } else {
            for (var i = 0; i < arraySize; i++) {
                array[i] = temp[i];
            }
            clearInterval(interval);
        }
    }, delay);
}

function quickSort() {
    var i = 0;
    var j = 0;
    var temp = 0;
    var interval = setInterval(function() {
        if (i < arraySize) {
            if (j < arraySize) {
                if (array[j] < array[i]) {
                    temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                }
                j++;
            } else {
                i++;
                j = i;
            }
            drawArray();
        } else {
            clearInterval(interval);
        }
    }, delay);
}

function start() {
    var radios = document.getElementsByName("algo");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            switch (radios[i].value) {
                case "bubble":
                    bubbleSort();
                    break;
                case "insertion":
                    insertionSort();
                    break;
                case "merge":
                    mergeSort();
                    break;
                case "quick":
                    quickSort();
                    break;
            }
        }
    }
}

function pause() {
    // TODO
}

function reset() {
    // TODO
}

initArray();
drawArray();