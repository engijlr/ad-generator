import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'images-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images-results.component.html',
  styleUrl: './images-results.component.css',
})
export class ImagesResultsComponent {
  @Input() isSearchPerformed = false;
  @Input() images: any[] = [];
  @Input() currentPage = 1;
  @Input() totalPages = 1;
  @Input() selectedImageIndex: number | null = null;
  @Input() seletedCategory: string = '';

  @Output() prevClicked = new EventEmitter<void>();
  @Output() nextClicked = new EventEmitter<void>();
  @Output() imageSelected = new EventEmitter<number>();

  onPrevClicked() {
    this.prevClicked.emit();
    this.selectedImageIndex = null;
  }

  onNextClicked() {
    this.nextClicked.emit();
    this.selectedImageIndex = null;
  }

  selectImage(index: number) {
    this.imageSelected.emit(index);
  }
}
