import { OrdemServico } from './../../../model/ordemservico.model';

import { ManuPreventiva } from './../../../model/manupreventiva.model';

import { Component, OnInit } from '@angular/core';
import { ManupreventivaService } from 'src/app/services/manupreventiva.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-manutencao-prenvent',
  templateUrl: './manutencao-prenvent.component.html',
  styleUrls: ['./manutencao-prenvent.component.css']
})
export class ManutencaoPrenventComponent implements OnInit {



  constructor(private servicerevisao: ManupreventivaService, private router: Router) {}

  ordemservico: OrdemServico[]

  manuprevente: ManuPreventiva = {
    ordemservico: null,
    embreagem : null,
    freio: null,
    luzespainel: null,
    niveloleo: null,
    kittracao: null,
    carburador: null,
    pneu: null,
    observacao: ' '
  }

  ngOnInit(): void {
    this.servicerevisao.read().subscribe(os =>{
      this.ordemservico = os
    })
  }

  createManutencaoPrevent(): void{
    this.servicerevisao.savemanupreventiva(this.manuprevente).subscribe(()=>{
      this.servicerevisao.showMessage("Manutenção salva com sucesso!!")
    })
  }

  cancel(): void{
    this.router.navigate[' ']
  }

}
