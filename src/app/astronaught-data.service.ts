import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AstronaughtDataService { //class will contain all fetches to API for astronaught data.
  
  constructor(private http: HttpClient) { 


  }

  /*GET ALL ASTRONAUGHTS*/

  getAstronaughts():Observable<any>{
    return this.http.get<any>("https://lldev.thespacedevs.com/2.2.0/astronaut/"); // maybe need to add a header for application/json
  }
}
