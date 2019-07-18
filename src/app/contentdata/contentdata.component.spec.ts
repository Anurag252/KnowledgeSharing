import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentdataComponent } from './contentdata.component';

describe('ContentdataComponent', () => {
  let component: ContentdataComponent;
  let fixture: ComponentFixture<ContentdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
