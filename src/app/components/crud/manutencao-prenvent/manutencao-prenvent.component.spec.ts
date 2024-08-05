import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoPrenventComponent } from './manutencao-prenvent.component';

describe('ManutencaoPrenventComponent', () => {
  let component: ManutencaoPrenventComponent;
  let fixture: ComponentFixture<ManutencaoPrenventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutencaoPrenventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoPrenventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
