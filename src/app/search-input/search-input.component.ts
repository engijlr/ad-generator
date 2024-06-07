import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  query: string = '';
  queryInvalid: boolean = false;

  @Output() search = new EventEmitter<string>();

  onSearch() {
    if (this.query.trim() === '') {
      this.queryInvalid = true;
    } else {
      this.queryInvalid = false;
      this.search.emit(this.query);
      this.query = '';
    }
  }
}
