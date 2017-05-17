export interface Matrix {
    readonly rows: number;
    readonly cols: number;
    getElement(row: number, column: number): number;
    __add__(rhs: any): Matrix | undefined;
    toString(): string;
}
export declare function matrix(elements: number[][]): Matrix;
