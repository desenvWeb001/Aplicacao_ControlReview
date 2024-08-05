import { OrdemServico } from '../../../model/ordemservico.model';
import { OrdemServicoService } from '../../../services/ordemservico.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-ordem-servico',
  templateUrl: './lista-ordem-servico.component.html',
  styleUrls: ['./lista-ordem-servico.component.css']
})
export class ListaOrdemServicoComponent implements OnInit {

  constructor(private serviceOrdemServico: OrdemServicoService, private router: Router) { }

  ordemServico: OrdemServico[]

  displayedColumns = ['id','cliente','tipoOrdemServico','veiculo','km','observacao']
  
  ngOnInit(): void {
    this.serviceOrdemServico.read().subscribe(listOs =>{
      this.ordemServico = listOs
    })
  }

  cancel(): void{
    this.router.navigate(['painel/ordemServico'])
  }

}
