import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLookComponent } from './post-look.component';

describe('PostLookComponent', () => {
  let component: PostLookComponent;
  let fixture: ComponentFixture<PostLookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
