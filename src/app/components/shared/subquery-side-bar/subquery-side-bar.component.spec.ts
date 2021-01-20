import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubquerySideBarComponent } from './subquery-side-bar.component';

describe('SubquerySideBarComponent', () => {
  let component: SubquerySideBarComponent;
  let fixture: ComponentFixture<SubquerySideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubquerySideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubquerySideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
