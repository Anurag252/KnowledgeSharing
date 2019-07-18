import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentheadingComponent } from './contentheading.component';

describe('ContentheadingComponent', () => {
  let component: ContentheadingComponent;
  let fixture: ComponentFixture<ContentheadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentheadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
