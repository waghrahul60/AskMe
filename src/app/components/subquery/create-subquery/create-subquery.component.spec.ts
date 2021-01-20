import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubqueryComponent } from './create-subquery.component';

describe('CreateSubqueryComponent', () => {
  let component: CreateSubqueryComponent;
  let fixture: ComponentFixture<CreateSubqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
