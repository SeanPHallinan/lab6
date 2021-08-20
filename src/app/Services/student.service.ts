import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  GetStudentData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/fffcc199-ebb3-11eb-9eff-4d69f516d9f1');
  }

  GetWeatherData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=e02251b5639841b53033c3020f4d30e0');
  }
}
