import { Matrix } from './matrix';
import { init } from './init';

export function zeros(rows: number, cols: number): Matrix {
    return init(rows, cols, 0);
}
