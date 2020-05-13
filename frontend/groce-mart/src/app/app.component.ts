import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    tiles: Tile[] = [
      {text: 'Tile 1', cols: 1, rows: 1 ,border: '3px double purple'},
      {text: 'Tile 2', cols: 1, rows: 1 ,border: '3px double red'},
      {text: 'Tile 3', cols: 1, rows: 1 ,border: '3px double skyblue'},
      {text: 'Tile 4', cols: 1, rows: 1 ,border: '3px double yellow'},
      ];
  title = 'groce-mart';
  constructor(private breakpointObserver: BreakpointObserver) {}
}
