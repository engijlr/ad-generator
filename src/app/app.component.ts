import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import { UnsplashApiService } from './services/unsplash-api.service';

import { ImagesResultsComponent } from './images-results/images-results.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { DisplayImageComponent } from './display-image/display-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    SearchInputComponent,
    ImagesResultsComponent,
    CategoryListComponent,
    DisplayImageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  searchQuery: string = '';
  images: any[] = [];
  searchPerformed: boolean = false;
  currentPage: number = 1;
  totalPages: number = 1;
  selectedImageIndex: number | null = null;
  selectedImage: any = null;

  constructor(private imageService: UnsplashApiService) {}

  onSearch(query: string, page = 1) {
    this.searchQuery = query;
    this.currentPage = page;

    this.imageService.searchImages(query, page).subscribe(
      (response: any) => {
        this.images = response.results;
        this.totalPages = response.total_pages;
        this.searchPerformed = true;
      },
      (error) => {
        console.error('Error fetching images:', error);
      }
    );
  }

  goToPage(page: number) {
    this.onSearch(this.searchQuery, page);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
    this.selectedImage = this.images[index];
  }
}
