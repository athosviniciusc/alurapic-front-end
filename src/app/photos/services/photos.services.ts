import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Photos } from '../model/photos.model';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

    constructor(private httpClient: HttpClient) { }

   getPhotos(userName: string): Observable<Photos[]> {
        return this.httpClient.get<Photos[]>( API + '/' + userName + '/photos')
  }

  getPhotosPaginator(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString())
    
    return this.httpClient.get<Photos[]>( API + '/' + userName + '/photos', {params: params})
  }
 
}
