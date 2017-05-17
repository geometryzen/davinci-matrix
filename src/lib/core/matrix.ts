export interface Matrix {
    readonly rows: number;
    readonly cols: number;
    getElement(row: number, column: number): number;
    __add__(rhs: any): Matrix | undefined;
    toString(): string;
}

function computeColumns(elements: number[][]): number {
    for (const row of elements) {
        return row.length;
    }
    throw new Error("elements must contain at least one row.");
}

function add(lhs: Matrix, rhs: Matrix): Matrix {
    const rows = lhs.rows;
    const cols = lhs.cols;
    const elements: number[][] = [];
    for (let i = 0; i < rows; i++) {
        const row: number[] = [];
        for (let j = 0; j < cols; j++) {
            row.push(lhs.getElement(i + 1, j + 1) + rhs.getElement(i + 1, j + 1));
        }
        elements.push(row);
    }
    return matrix(elements);
}

export function matrix(elements: number[][]): Matrix {
    const rows = elements.length;
    const cols = computeColumns(elements);

    function getElement(row: number, column: number): number {
        return elements[row - 1][column - 1];
    }

    function toString(): string {
        return elements.map(function (row) { return row.join(", "); }).join("\n");
    }

    const m: Matrix = {
        rows,
        cols,
        getElement,
        toString,
        __add__(rhs: Matrix) {
            return add(m, rhs);
        }
    };
    return m;
}
