import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class MnsService {

  constructor(private http: HttpClient) { }

  public getCardData(code:string): Observable<any> {
    return this.http.get("../assets/JSON/data.json");
}


}
