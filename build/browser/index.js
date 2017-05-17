(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.EIGHT = global.EIGHT || {})));
}(this, (function (exports) { 'use strict';

function computeColumns(elements) {
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var row = elements_1[_i];
        return row.length;
    }
    throw new Error("elements must contain at least one row.");
}
function add(lhs, rhs) {
    var rows = lhs.rows;
    var cols = lhs.cols;
    var elements = [];
    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < cols; j++) {
            row.push(lhs.getElement(i + 1, j + 1) + rhs.getElement(i + 1, j + 1));
        }
        elements.push(row);
    }
    return matrix(elements);
}
function matrix(elements) {
    var rows = elements.length;
    var cols = computeColumns(elements);
    function getElement(row, column) {
        return elements[row - 1][column - 1];
    }
    function toString() {
        return elements.map(function (row) { return row.join(", "); }).join("\n");
    }
    var m = {
        rows: rows,
        cols: cols,
        getElement: getElement,
        toString: toString,
        __add__: function (rhs) {
            return add(m, rhs);
        }
    };
    return m;
}

function init(rows, cols, value) {
    var elements = [];
    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < cols; j++) {
            row.push(value);
        }
        elements.push(row);
    }
    return matrix(elements);
}

function ones(rows, cols) {
    return init(rows, cols, 1);
}

function zeros(rows, cols) {
    return init(rows, cols, 0);
}

exports.matrix = matrix;
exports.ones = ones;
exports.zeros = zeros;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
