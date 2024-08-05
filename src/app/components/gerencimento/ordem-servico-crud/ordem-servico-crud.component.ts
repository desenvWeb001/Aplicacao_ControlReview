import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordem-servico-crud',
  templateUrl: './ordem-servico-crud.component.html',
  styleUrls: ['./ordem-servico-crud.component.css']
})
export class OrdemServicoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateCreateOrdemServico(): void{
    this.router.navigate(['ordemservico'])
  }

  navigateGetOrdemServico(): void{
    this.router.navigate(['lista/ordemServico'])
  }


}
