import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSidebarTwoComponent } from './post-sidebar-two.component';

describe('PostSidebarTwoComponent', () => {
  let component: PostSidebarTwoComponent;
  let fixture: ComponentFixture<PostSidebarTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSidebarTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSidebarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
