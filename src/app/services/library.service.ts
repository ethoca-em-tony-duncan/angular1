import {Injectable} from '@angular/core';
import {BookView} from "../models/book-view";
import {LibraryResponse} from "../models/library-response";
import {HttpStatusCode} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {BookService} from "./book.service";
import {AuthorService} from "./author.service";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private bookService: BookService,
              private authorService: AuthorService) { }

  getBook(id: number): Observable<LibraryResponse<BookView>> {
    let bookView: BookView = { };
    let authorIds: number[] = [];

    this.bookService.getBook(id).subscribe(bookResp => {
      bookView = { ...bookResp.response } as BookView;
      authorIds = bookResp.response.authorIds;
    });

    this.authorService.authorsByIds(authorIds).subscribe(authorsResp => bookView.authors = authorsResp.response);

    return of({
      status: HttpStatusCode.Ok,
      response: bookView
    });
  }

}