"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeColumns(elements) {
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var row = elements_1[_i];
        return row.length;
    }
    throw new Error("elements must contain at least one row.");
}
function matrix(elements) {
    var rows = elements.length;
    var cols = computeColumns(elements);
    function getElement(row, column) {
        return elements[row - 1][column - 1];
    }
    var m = {
        rows: rows,
        cols: cols,
        getElement: getElement
    };
    return m;
}
exports.matrix = matrix;
