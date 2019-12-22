import { Component, OnInit } from "@angular/core";
import {Book} from '../models/book.model';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  books: Book[];
  selectedBook: string;

  constructor() {
    this.books = [
      { name: "Book1", author: "Author1" },
      { name: "Book2", author: "Author2" },
      { name: "Book3", author: "Author3" },
      { name: "Book4", author: "Author4" },
      { name: "Book5", author: "Author5" }
    ];
  }
  ngOnInit() {}
}
