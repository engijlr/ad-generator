import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  categories = [
    'Restaurants',
    'Cafes',
    'Spa',
    'Clothing',
    'Beauty Salon',
    'Bakery',
    'Gym',
    'Vet',
  ];

  @Output() categorySelected = new EventEmitter<string>();

  onClick(selectedQuery: string) {
    this.categorySelected.emit(selectedQuery);
  }
}
