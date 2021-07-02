import { Component, OnInit } from '@angular/core';
import { AstronaughtDataService } from '../astronaught-data.service';
@Component({
  selector: 'app-astronaughts',
  templateUrl: './astronaughts.component.html',
  styleUrls: ['./astronaughts.component.css']
})
export class AstronaughtsComponent implements OnInit {
  astronaughtArray: any;
  constructor(private asDataService:AstronaughtDataService) { }

  ngOnInit(): void {
    this.asDataService.getAstronaughts().subscribe(data=>{
      this.astronaughtArray = data;
      console.log("Astronaught data: ", this.astronaughtArray);
    })
  }

}
