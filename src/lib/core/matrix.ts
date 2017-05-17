export interface Matrix {
    readonly rows: number;
    readonly cols: number;
    getElement(row: number, column: number): number;
}

function computeColumns(elements: number[][]): number {
    for (const row of elements) {
        return row.length;
    }
    throw new Error("elements must contain at least one row.");
}

export function matrix(elements: number[][]): Matrix {
    const rows = elements.length;
    const cols = computeColumns(elements);

    function getElement(row: number, column: number): number {
        return elements[row - 1][column - 1];
    }

    const m: Matrix = {
        rows,
        cols,
        getElement
    };
    return m;
}
