import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApis {
  constructor(private http : HttpClient){}

  getMmorpgData() : Observable<any>{
    return  this.http.get('/api/api/games?category=mmorpg')
  }
  getShooterData() : Observable<any>{
    return  this.http.get("/api/api/games?category=shooter")
  }
  getPixelData() : Observable<any>{
    return  this.http.get("/api/api/games?category=pixel")
  }
  getPermadeathData() : Observable<any>{
    return  this.http.get("/api/api/games?category=permadeath")
  }
  getSailingData() : Observable<any>{
    return  this.http.get("/api/api/games?category=sailing")
  }
  getSuperheroData() : Observable<any>{
    return  this.http.get("/api/api/games?category=superhero")
  }

  // ng serve --proxy-config proxy.conf.json
  // https://www.freetogame.com/api/games?category=mmorpg

  getSpecificGameData(id: string) : Observable<any>{
    return this.http.get(`/api/api/games/${id}`);   
  }
}
