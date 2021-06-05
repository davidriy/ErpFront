import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdriacardonaComponent } from './adriacardona.component';

describe('AdriacardonaComponent', () => {
  let component: AdriacardonaComponent;
  let fixture: ComponentFixture<AdriacardonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdriacardonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdriacardonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
