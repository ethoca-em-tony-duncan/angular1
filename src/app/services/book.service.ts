import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../models/app-config';
import { Book } from '../models/book';
import { LibraryResponse } from '../models/library-response';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient,
              private appConfig: AppConfig) { }

  getBook(id: number): Observable<LibraryResponse<Book>> {
    return this.httpClient
      .get<LibraryResponse<Book>>(this.appConfig.bookEndpoint + '/' + id.toString());    
  }
}
