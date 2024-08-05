import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemServicoCrudComponent } from './ordem-servico-crud.component';

describe('OrdemServicoCrudComponent', () => {
  let component: OrdemServicoCrudComponent;
  let fixture: ComponentFixture<OrdemServicoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemServicoCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemServicoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
