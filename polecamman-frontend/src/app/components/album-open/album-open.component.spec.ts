import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumOpenComponent } from './album-open.component';

describe('AlbumOpenComponent', () => {
  let component: AlbumOpenComponent;
  let fixture: ComponentFixture<AlbumOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
