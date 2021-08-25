import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageDataService {

  constructor(private http: HttpClient) { }
  /*
    NASA IMAGE GALLERY API
    Supports searching by: media type, q which is a specific image (apollo 11 for example), keywords, title, year start date or year end date.
  */
  getImages():Observable<any>{
    return this.http.get<any>(`https://images-api.nasa.gov/search&media_type=image`); //gets all images.
    //currently gets a CORS error. 
  }
}
