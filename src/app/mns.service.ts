import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MnsService {

  constructor(private http: HttpClient) { }

  public getCardData(code:string): Observable<any> {
    return this.http.get("http://ec2-13-232-195-168.ap-south-1.compute.amazonaws.com:8080/singlecard/"+code);
}


}
