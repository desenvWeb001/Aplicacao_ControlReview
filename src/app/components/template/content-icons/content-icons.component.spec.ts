import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentIconsComponent } from './content-icons.component';

describe('ContentIconsComponent', () => {
  let component: ContentIconsComponent;
  let fixture: ComponentFixture<ContentIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
