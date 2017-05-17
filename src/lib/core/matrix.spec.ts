import { matrix } from './matrix';

describe("matrix", function () {
    it("constructor", function () {
        const elements = [[1, 2, 3], [4, 5, 6]];
        const M = matrix(elements);
        expect(M.rows).toBe(2);
        expect(M.cols).toBe(3);
        expect(M.getElement(1, 1)).toBe(1);
        expect(M.getElement(1, 2)).toBe(2);
        expect(M.getElement(1, 3)).toBe(3);
        expect(M.getElement(2, 1)).toBe(4);
        expect(M.getElement(2, 2)).toBe(5);
        expect(M.getElement(2, 3)).toBe(6);
    });
});
