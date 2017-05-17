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

function ones(rows, cols) {
    throw new Error("ones is not implemented");
}

function zeros(rows, cols) {
    throw new Error("zeros is not implemented");
}

exports.matrix = matrix;
exports.ones = ones;
exports.zeros = zeros;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
