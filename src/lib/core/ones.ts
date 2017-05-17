import { Matrix } from './matrix';
import { init } from './init';

export function ones(rows: number, cols: number): Matrix {
    return init(rows, cols, 1);
}
