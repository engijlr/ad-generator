import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnsplashApiService {
  private apiUrl = 'https://api.unsplash.com/search/photos';
  private accessKey = 'hnU1qiC5UG7td2itXzEFC_bhz1jSWpLJWO6AKbrHCz4';

  constructor(private http: HttpClient) {}

  searchImages(query: string, page: number = 1): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Client-ID ${this.accessKey}`,
    });

    return this.http.get(this.apiUrl, {
      headers: headers,
      params: {
        query: query,
        page: page,
        per_page: '8',
        orientation: 'portrait',
      },
    });
  }
}
