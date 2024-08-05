import { OrdemServico } from '../../../model/ordemservico.model';
import { OrdemServicoService } from '../../../services/ordemservico.service';
import { VeiculoService } from '../../../services/Veiculo.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../model/cliente.model';
import { ClienteService } from '../../../services/cliente.service';
import { Veiculo } from '../../../model/veiculo.model';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-ordem-servico',
  templateUrl: './ordem-servico.component.html',
  styleUrls: ['./ordem-servico.component.css']
})
export class OrdemServicoComponent implements OnInit {

   data = new Date()


  clientes: Cliente[]
  veiculos: Veiculo[]

  dataFormatada = (this.data.getDate() + " " + this.data.getMonth() + " " + this.data.getFullYear())

  ordemservico: OrdemServico = {
    cliente: null,
    tipoOrdemServico: ' ',
    veiculo: null,
    km: ' ',
    observacao: ' ',
    dataSys: this.dataFormatada 
  }

  @ViewChild('myForm') myForm: NgForm;

  tipoOrdemServico: string[] = ['REVISÃO COMPLETA', 'MANUTENÇÃO PREVENTIVA', 
                                'TROCA DE PEÇA OU OLEO','OUTRO']
  
  constructor(private clienteService: ClienteService, private serviceVeiculo: VeiculoService,
              private ordemservicoService: OrdemServicoService,private router: Router) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clienteEvent =>{
      this.clientes = clienteEvent
    })

    this.serviceVeiculo.read().subscribe(veiculo =>{
      this.veiculos = veiculo
    })
  }

  createOrdemServico(): void{
    this.ordemservicoService.create(this.ordemservico).subscribe(os =>{
      this.ordemservicoService.showMessage("Ordem de Serviço Cadastrada com Sucesso")
      this.myForm.reset()
      //this.router.navigate(['painel/ordemServico'])
    })
  }

  cancel():void{
      this.router.navigate(['painel/ordemServico'])
  }
}
