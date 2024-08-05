import { Cliente } from '../../../model/cliente.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService, private router: Router,
              ) { }

 client: Cliente = {
    name: ' ',
    email: ' ',
    fone: ' '
}

  @ViewChild('myForm') myForm: NgForm;

  ngOnInit(): void {
  }

  createClient(): void { 

      this.clienteService.createCliente(this.client).subscribe(() =>{
      this.clienteService.showMessage("Cadastrado com Sucesso")
      //this.router.navigate(['painel/cliente']) 
      this.myForm.reset()
      //setTimeout(function(){ ; }, 6000);
      //this.router.navigate(['']) 
    })
  }

  cancel(): void{
    this.router.navigate(['painel/cliente']) 
  }
  
}
