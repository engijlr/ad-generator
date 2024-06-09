import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'display-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-image.component.html',
  styleUrl: './display-image.component.css',
})
export class DisplayImageComponent {
  @Input() selectedImage: any = null;
  @Input() isSearchPerformed = false;
  @Input() foundImages: any[] = [];
}
