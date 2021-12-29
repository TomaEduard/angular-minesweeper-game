export class Cell {
  status: 'open' | 'clear' | 'flag' = 'open';
  mine = false;
  proximityMines: number = 0;

  constructor(
    public row: number, 
    public column: number,
  ) {

  }

}