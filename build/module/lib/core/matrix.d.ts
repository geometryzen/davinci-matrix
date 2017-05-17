export interface Matrix {
    readonly rows: number;
    readonly cols: number;
    getElement(row: number, column: number): number;
}
export declare function matrix(elements: number[][]): Matrix;
