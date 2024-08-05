import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { AppRoutingModule } from './app-routing.module';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { CadastroClienteComponent } from './components/crud/cadastro-cliente/cadastro-cliente.component';
import { ContentIconsComponent } from './components/template/content-icons/content-icons.component';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule}from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import { CadastroVeiculoComponent } from './components/crud/cadastro-veiculo/cadastro-veiculo.component';
import { ManutencaoPrenventComponent } from './components/crud/manutencao-prenvent/manutencao-prenvent.component';
import { OrdemServicoComponent } from './components/crud/ordem-servico/ordem-servico.component';
import { RelatorioComponent } from './components/listas/relatorio/relatorio.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import { ColorButtonNavDirective } from './directives/color-button-nav.directive';
import { ClienteCrudComponent } from './components/gerencimento/cliente-crud/cliente-crud.component';
import { ListaClienteComponent } from './components/listas/lista-cliente/lista-cliente.component';
import { VeiculoCrudComponent } from './components/gerencimento/veiculo-crud/veiculo-crud.component';
import { ListaVeiculoComponent } from './components/listas/lista-veiculo/lista-veiculo.component';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
// transformando formatação sepradores de casas decimais na utilização de PIPES 
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { OrdemServicoCrudComponent } from './components/gerencimento/ordem-servico-crud/ordem-servico-crud.component';
import { ListaOrdemServicoComponent } from './components/listas/lista-ordem-servico/lista-ordem-servico.component';
import { RevisaoComponent } from './components/crud/revisao/revisao.component';
import { TrocaComponent } from './components/crud/troca/troca.component';
registerLocaleData(localePt);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CadastroClienteComponent,
    ContentIconsComponent,
    CadastroVeiculoComponent,
    ManutencaoPrenventComponent,
    OrdemServicoComponent,
    RelatorioComponent,
    ColorButtonNavDirective,
    ClienteCrudComponent,
    ListaClienteComponent,
    VeiculoCrudComponent,
    ListaVeiculoComponent,
    OrdemServicoCrudComponent,
    ListaOrdemServicoComponent,
    RevisaoComponent,
    TrocaComponent
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule
  ],

  // definindo formatação como pt-BR
  providers: [{
    provide: LOCALE_ID,
    useValue: "pt-BR"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
