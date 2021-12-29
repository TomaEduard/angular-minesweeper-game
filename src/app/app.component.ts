import { Component } from '@angular/core';
import { Board } from './game/board';
import { Cell } from './game/cell';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  board: Board;
  blockAction: 'play' | 'gameover' | 'win'  = 'play';

  constructor() {
    this.reset();
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      this.blockAction ='gameover';
      window.alert('You lose');
    } else if (result === 'win') {
      this.blockAction ='win';
      window.alert('you win');
    }
  }

  flag(cell: Cell) {
    if (this.blockAction === 'play') {
      if (cell.status === 'flag') {
        cell.status = 'open';
      } else {
        cell.status = 'flag';
      }
    }
  }

  reset() {
    this.board = new Board(15, 35);
    this.blockAction = 'play';
  }

}
