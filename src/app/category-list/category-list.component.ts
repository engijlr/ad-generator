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

  selectedCategory: string | null = null;

  @Output() categorySelected = new EventEmitter<string>();

  onClick(selectedQuery: string) {
    this.selectedCategory = selectedQuery;
    this.categorySelected.emit(selectedQuery);
  }
  isSelected(category: string): boolean {
    return this.selectedCategory === category;
  }
}
