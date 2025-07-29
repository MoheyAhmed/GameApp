import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApis {
  constructor(private http : HttpClient){}
  headers = {
  'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  'x-rapidapi-key': '93f75df45fmsh97053a544873791p121164jsne9e75f6d93a9'
};
  getMmorpgData() : Observable<any>{
    return  this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg' , { headers: this.headers });  }
  getShooterData() : Observable<any>{
    return  this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', { headers: this.headers });
  }
  getPixelData() : Observable<any>{
    return  this.http.get("https://free-to-play-games-database.p.rapidapi.com/api/games?category=pixel" , { headers: this.headers });  }
  getPermadeathData() : Observable<any>{
    return  this.http.get("https://free-to-play-games-database.p.rapidapi.com/api/games?category=permadeath" , { headers: this.headers });
  }
  getSailingData() : Observable<any>{
    return  this.http.get("https://free-to-play-games-database.p.rapidapi.com/api/games?category=sailing" , { headers: this.headers });
  }
  getSuperheroData() : Observable<any>{
    return  this.http.get("https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero" , { headers: this.headers });
  }

  // ng serve --proxy-config proxy.conf.json
  // https://www.freetogame.com/api/games?category=mmorpg

  getSpecificGameData(id: string) : Observable<any>{
    return this.http.get(`/api/api/games/${id}`);   
  }
}
