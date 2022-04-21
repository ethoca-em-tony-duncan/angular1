import {HttpStatusCode} from "@angular/common/http";

export interface LibraryResponse<T> {
  status: HttpStatusCode;
  response: T;
}