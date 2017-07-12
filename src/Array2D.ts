
export class Array2D<Type> {
    numRows :number;
    numCols :number;
    grid :Array<Array<Type>>;

    constructor(nRows: number, nCols: number){
        this.numRows = nRows;
        this.numCols = nCols;
        this.grid = [];
        for (let i of [...Array(nRows)]){
            this.grid.push(new Array<Type>(nCols));
        }
    }

    get(r: number, c : number) :Type{
        return this.grid[r][c];
    }

    set(r: number, c : number, x : Type) :void{
        this.grid[r][c] = x;
    }

    getAt(pt : Array<number>) :Type{
        return this.get(pt[0], pt[1]);
    }
    setAt(pt : Array<number>, x:Type) :void{
        this.set(pt[0], pt[1], x);
    }
};
