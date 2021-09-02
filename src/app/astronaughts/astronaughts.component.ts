import { Component, NgModule, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { AstronaughtDataService } from '../astronaught-data.service';
import { SearchPipe } from '../search.pipe';
@Component({
  selector: 'app-astronaughts',
  templateUrl: './astronaughts.component.html',
  styleUrls: ['./astronaughts.component.css']
})
export class AstronaughtsComponent implements OnInit {
  astronaughtArray: any;
  astronautAgeArray : any;
  astroName : string;
  bioShown : boolean = false;
  hoverElement : any;
  timer: any;
  constructor(private asDataService:AstronaughtDataService) { }
  scrollDiv(elementToScroll:HTMLElement, depl) {
    elementToScroll.scrollTop -= depl;
    console.log('scrolling...')
    this.timer = setTimeout(()=>{
      this.scrollDiv(elementToScroll, depl)
    }, 30);
  }

  stopTimer(timer:any) {
    clearTimeout(timer);
  }
  ngOnInit(): void {
    this.astroName = '';
    this.asDataService.getAstronaughts().subscribe(data=>{
      this.astronaughtArray = data;
      console.log("Astronaught data: ", this.astronaughtArray);    
    });
  }

}
