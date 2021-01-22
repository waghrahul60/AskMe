import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubqueryComponent } from './view-subquery.component';

describe('ViewSubqueryComponent', () => {
  let component: ViewSubqueryComponent;
  let fixture: ComponentFixture<ViewSubqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
