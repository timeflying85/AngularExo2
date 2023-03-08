import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoBannerComponent } from './exo-banner.component';

describe('ExoBannerComponent', () => {
  let component: ExoBannerComponent;
  let fixture: ComponentFixture<ExoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
