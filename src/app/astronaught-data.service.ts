import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AstronaughtDataService { //class will contain all fetches to API for astronaught data.
  offCounter : number;
  
  constructor(private http: HttpClient) { 
  }
  ngOnInit(): void {
    this.offCounter = 20;
  }
  /*GET ALL ASTRONAUGHTS*/

  getAstronaughts():Observable<any>{
    this.offCounter += 10;
    return this.http.get<any>(`https://lldev.thespacedevs.com/2.2.0/astronaut/`); // maybe need to add a header for application/json
  }
  searchAstronauts(searchString) : Observable<any>{
    return this.http.get<any>(`https://lldev.thespacedevs.com/2.2.0/astronaut/`); //maybe don't even need {searchString}, I can filter the other API fetch data?
  }
}
