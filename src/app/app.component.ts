import { Component } from '@angular/core';
import { BookView } from './models/book-view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  book?: BookView;

  title = 'angular1';
}
