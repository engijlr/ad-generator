import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesResultsComponent } from './images-results.component';

describe('ImagesResultsComponent', () => {
  let component: ImagesResultsComponent;
  let fixture: ComponentFixture<ImagesResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
