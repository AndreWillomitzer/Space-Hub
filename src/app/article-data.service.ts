import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  constructor(private http: HttpClient) { }
  getArticles():Observable<any>{   
    return this.http.get<any>(`https://api.spaceflightnewsapi.net/v3/articles?_limit=20`); // maybe need to add a header for application/json
  }
}
