import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostOpenComponent } from './blog-post-open.component';

describe('BlogPostOpenComponent', () => {
  let component: BlogPostOpenComponent;
  let fixture: ComponentFixture<BlogPostOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
