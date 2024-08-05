import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CadastroClienteComponent} from './components/crud/cadastro-cliente/cadastro-cliente.component';
import {ContentIconsComponent} from './components/template/content-icons/content-icons.component';
import { CadastroVeiculoComponent } from './components/crud/cadastro-veiculo/cadastro-veiculo.component';
import { ManutencaoPrenventComponent } from './components/crud/manutencao-prenvent/manutencao-prenvent.component';
import { OrdemServicoComponent } from './components/crud/ordem-servico/ordem-servico.component';
import { RelatorioComponent } from './components/listas/relatorio/relatorio.component';
import {ClienteCrudComponent} from './components/gerencimento/cliente-crud/cliente-crud.component';
import {ListaClienteComponent} from './components/listas/lista-cliente/lista-cliente.component';
import { VeiculoCrudComponent} from './components/gerencimento/veiculo-crud/veiculo-crud.component';
import { ListaVeiculoComponent} from './components/listas/lista-veiculo/lista-veiculo.component';
import { OrdemServicoCrudComponent } from './components/gerencimento/ordem-servico-crud/ordem-servico-crud.component';
import { ListaOrdemServicoComponent } from './components/listas/lista-ordem-servico/lista-ordem-servico.component';
import { RevisaoComponent } from './components/crud/revisao/revisao.component';
import { TrocaComponent } from './components/crud/troca/troca.component';

//array com rotas da aplicação
const routes: Routes = [{
  path: "",
  component: ContentIconsComponent
},{
  path: "clientes",
  component: CadastroClienteComponent
},{
  path: "veiculos",
  component: CadastroVeiculoComponent
},{
  path: "manutencaopreventiva",
  component: ManutencaoPrenventComponent
},{   
  path: "ordemservico",
  component: OrdemServicoComponent
},{
  path: "relatorios",
  component: RelatorioComponent
},{
  path: "painel/cliente",
  component: ClienteCrudComponent
},{
  path: "lista/cliente",
  component: ListaClienteComponent
},{
  path: "painel/veiculo",
  component: VeiculoCrudComponent
},{
  path: "lista/veiculo",
  component: ListaVeiculoComponent
},{
  path: "painel/ordemServico",
  component: OrdemServicoCrudComponent
},{
  path: "lista/ordemServico",
  component: ListaOrdemServicoComponent
},{
  path: "revisao",
  component: RevisaoComponent
},{
  path: "troca",
  component: TrocaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
