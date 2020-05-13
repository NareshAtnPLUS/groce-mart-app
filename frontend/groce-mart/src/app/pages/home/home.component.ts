import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  breakpoint;
  constructor(private breakpointObserver: BreakpointObserver) {}
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    ngOnInit() {
      this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
  tiles: Tile[] = [
    {text: 'Tile 1', cols: 1, rows: 1 ,border: '3px double purple'},
    {text: 'Tile 2', cols: 1, rows: 1 ,border: '3px double red'},
    {text: 'Tile 3', cols: 1, rows: 1 ,border: '3px double skyblue'},
    {text: 'Tile 4', cols: 1, rows: 1 ,border: '3px double yellow'},
    ];
  place:string = "My Place";
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

}
