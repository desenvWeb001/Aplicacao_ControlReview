import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../../../services/Veiculo.service';
import { Veiculo } from '../../../model/veiculo.model';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.css']
})
export class CadastroVeiculoComponent implements OnInit {

  constructor(private veiculoService: VeiculoService, private router: Router) { }

  ngOnInit(): void {
  }

  veiculo: Veiculo = {
    placa: ' ',
    modelo: ' ',
    ano: 2021,
    cor: ' '
  }

  @ViewChild('myForm') myForm: NgForm;


  createVeiculo(): void{
    this.veiculoService.createVeiculo(this.veiculo).subscribe(() =>{
    this.veiculoService.showMessage("Veiculo Cadastrado com Sucesso!!!")
    this.myForm.reset()
    //this.router.navigate(['painel/veiculo'])
    })
  }

  cancel(): void{
    this.router.navigate(['painel/veiculo'])
  }

}
