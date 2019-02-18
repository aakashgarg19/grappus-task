import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private _http: HttpClient
  ) { }

    public getCategories(): Observable<any> {
      return this._http.get('../../assets/json/categories.json');
    }

    public getBadgeMasterData(): Observable<any> {
      return this._http.get('../../assets/json/badgeMasterData.json');
    }

    public getBadgeData(): Observable<any> {
      return this._http.get('../../assets/json/badgeData.json');
    }

    public getSectorsMasterData(): Observable<any> {
      return this._http.get('../../assets/json/sectors.json');
    }

    public getSectorsData(): Observable<any> {
      return this._http.get('../../assets/json/sectorsData.json');
    }
}
