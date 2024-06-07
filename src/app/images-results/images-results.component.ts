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

  @Output() prevClicked = new EventEmitter<void>();
  @Output() nextClicked = new EventEmitter<void>();

  onPrevClicked() {
    this.prevClicked.emit();
  }

  onNextClicked() {
    this.nextClicked.emit();
    console.log('next');
  }
}
