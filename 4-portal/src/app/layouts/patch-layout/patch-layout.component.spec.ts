import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchLayoutComponent } from './patch-layout.component';

describe('PatchLayoutComponent', () => {
  let component: PatchLayoutComponent;
  let fixture: ComponentFixture<PatchLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
