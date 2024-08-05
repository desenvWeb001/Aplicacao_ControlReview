import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdemServicoComponent } from './lista-ordem-servico.component';

describe('ListaOrdemServicoComponent', () => {
  let component: ListaOrdemServicoComponent;
  let fixture: ComponentFixture<ListaOrdemServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOrdemServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
