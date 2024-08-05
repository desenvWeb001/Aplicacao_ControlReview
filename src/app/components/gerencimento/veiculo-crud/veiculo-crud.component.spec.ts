import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoCrudComponent } from './veiculo-crud.component';

describe('VeiculoCrudComponent', () => {
  let component: VeiculoCrudComponent;
  let fixture: ComponentFixture<VeiculoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
