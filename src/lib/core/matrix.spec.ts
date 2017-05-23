import { matrix } from './matrix';

describe("matrix", function () {
    describe("constructor", function () {
        const elements = [[1, 2, 3], [4, 5, 6], [7,8,9]];
        const M = matrix(elements);
        it("should have correct rows", function () {
            expect(M.rows).toBe(3);
        });
        it("should have correct columns", function () {
            expect(M.cols).toBe(3);
        });
        it("should have correct elements", function () {
            expect(M.getElement(1, 1)).toBe(1);
            expect(M.getElement(1, 2)).toBe(2);
            expect(M.getElement(1, 3)).toBe(3);
            expect(M.getElement(2, 1)).toBe(4);
            expect(M.getElement(2, 2)).toBe(5);
            expect(M.getElement(2, 3)).toBe(6);
        });
    });
    describe("toString", function () {
        const elements = [[1, 2, 3], [4, 5, 6]];
        const M = matrix(elements);
        it("should be comma-space delimited on columns and newline on rows", function () {
            expect(typeof M.toString()).toBe('string');
            expect(`${M.toString()}`).toBe("1, 2, 3\n4, 5, 6");
        });
    });
    describe("__add__", function () {
        const A = matrix([[1, 2, 3], [4, 5, 6]]);
        const B = matrix([[2, 3, 5], [7, 11, 13]]);
        const M = A.__add__(B);
        it("should have correct rows", function () {
            expect(M.rows).toBe(A.rows);
        });
        it("should have correct columns", function () {
            expect(M.cols).toBe(A.cols);
        });
        it("should have correct elements", function () {
            expect(M.getElement(1, 1)).toBe(3);
            expect(M.getElement(1, 2)).toBe(5);
            expect(M.getElement(1, 3)).toBe(8);
            expect(M.getElement(2, 1)).toBe(11);
            expect(M.getElement(2, 2)).toBe(16);
            expect(M.getElement(2, 3)).toBe(19);
        });
    });
});
