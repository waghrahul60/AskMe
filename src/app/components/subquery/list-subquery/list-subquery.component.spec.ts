import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubqueryComponent } from './list-subquery.component';

describe('ListSubqueryComponent', () => {
  let component: ListSubqueryComponent;
  let fixture: ComponentFixture<ListSubqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
