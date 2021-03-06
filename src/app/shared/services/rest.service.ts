import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IArtiste } from 'src/app/shared/models/IArtiste';
import { IFans } from 'src/app/shared/models/IFans';
import { Observable } from 'rxjs';
import { IActivite } from 'src/app/shared/models/IActivite';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  activites: string = "http://localhost:3000/activites"
  artistes: string = "http://localhost:3000/artistes"
  fans: string = "http://localhost:3000/fans"

  constructor(private http: HttpClient) { }

  getActivites(): Observable<IActivite[]> {
    // Get all activites
    // In general, an observable can return multiple values over time. 
    // An observable from HttpClient always emits a single value and then completes, never to emit again.
    return this.http.get<IActivite[]>(this.activites);
  }

  getArtiste(id: number): Observable<IArtiste[]> {
    // Get 1 artiste
    return this.http.get<IArtiste[]>(`${this.artistes}?id_like=${id}`);
  }

  getFans(): Observable<IFans[]> {
    // Get all fans
    return this.http.get<IFans[]>(this.fans);
  }

  addFans(fan: IFans): Observable<IFans> {
    return this.http.post<IFans>(this.fans, fan);
  }
}
