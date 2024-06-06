import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  query: string = '';

  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.query);
    this.query = '';
  }
}
