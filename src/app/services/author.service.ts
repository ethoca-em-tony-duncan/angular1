import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {LibraryResponse} from "../models/library-response";
import {Author} from "../models/author";
import {HttpClient, HttpStatusCode} from "@angular/common/http";
import {AppConfig} from "../models/app-config";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpClient: HttpClient,
              private appConfig: AppConfig) { }

  authorsByIds(ids: number[]): Observable<LibraryResponse<Author[]>> {
    let authors: Author[] = [];

    ids.forEach(id => {
      let url = this.appConfig.authorEndpoint + '/' + id.toString();
      this.httpClient.get<LibraryResponse<Author>>(url)
        .subscribe(response => authors.push(response.response));
    })

    while (authors.length < ids.length) {
      (async () => {
        await new Promise(f => setTimeout(f, 1000));
      })();
    }

    return of({
      status: HttpStatusCode.Ok,
      response: authors
    });
  }

}