import {Component, Input, OnInit} from '@angular/core';
import {BookView} from "../../models/book-view";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input()
  bookView?: BookView;

  constructor() { }

  ngOnInit(): void {
  }

}