import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { AstronaughtDataService } from '../astronaught-data.service';
@Component({
  selector: 'app-astronaughts',
  templateUrl: './astronaughts.component.html',
  styleUrls: ['./astronaughts.component.css']
})
export class AstronaughtsComponent implements OnInit {
  astronaughtArray: any;
  astronautAgeArray : any;
  constructor(private asDataService:AstronaughtDataService) { }
  getAgePart(str) : string {
    var astroDate = str.split('-')[0];
    var today = new Date();
    var year = today.getFullYear();
    var astroYearOB = astroDate.getFullYear();
    console.log("Age: ",(year - astroYearOB).toString());
    return (year - astroYearOB).toString();
  }
/*   getAllAges(str) : void{
    for(var i = 0; i < this.astronaughtArray.length; i++){
      var currentAge = this.getAgePart((this.astronaughtArray.results[i].date_of_birth).toString());
      console.log(`Age: ${currentAge}`);
      this.astronautAgeArray[i] = currentAge;      
    }
  } */
  ngOnInit(): void {
    this.asDataService.getAstronaughts().subscribe(data=>{
      this.astronaughtArray = data;
      console.log("Astronaught data: ", this.astronaughtArray);
/*       for(var i = 0; i < this.astronaughtArray.length; i++){
        this.astronautAgeArray[i] = this.getAgePart((this.astronaughtArray.results[i].date_of_birth).toString());
        console.log(this.astronautAgeArray[i]);
      } */
      for(var astronaught of this.astronaughtArray.results){
        console.log(this.getAgePart((astronaught.date_of_birth).toString()));
      }      
    });
  }

}
