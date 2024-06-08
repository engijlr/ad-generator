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

  //constructor(private imageService: UnsplashApiService) {}

  onSearch(query: string, page = 1) {
    this.searchQuery = query;
    this.searchPerformed = true;
    this.currentPage = page;

    this.images = [
      {
        url: 'https://images.unsplash.com/photo-1717457779768-b93ca50327bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 1',
      },
      {
        url: 'https://plus.unsplash.com/premium_photo-1669279283156-7cca8ccba55c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 2',
      },
      {
        url: 'https://plus.unsplash.com/premium_photo-1669279283156-7cca8ccba55c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 3',
      },
      {
        url: 'https://plus.unsplash.com/premium_photo-1669279283156-7cca8ccba55c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 4',
      },
      {
        url: 'https://plus.unsplash.com/premium_photo-1669279283156-7cca8ccba55c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 5',
      },
      {
        url: 'https://plus.unsplash.com/premium_photo-1669279283156-7cca8ccba55c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 6',
      },
      {
        url: 'https://plus.unsplash.com/premium_photo-1669279283156-7cca8ccba55c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 7',
      },
      {
        url: 'https://plus.unsplash.com/premium_photo-1669279283156-7cca8ccba55c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Image 8',
      },
    ];

    //   this.imageService.searchImages(query, page).subscribe(
    //     (response: any) => {
    //       this.images = response.results;
    //       this.totalPages = response.total_pages;
    //     },
    //     (error) => {
    //       console.error('Error fetching images:', error);
    //     }
    //   );
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
    console.log(this.selectedImage);
  }
}
