import { Veiculo } from '../model/veiculo.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{ MatSnackBar} from '@angular/material/snack-bar';
import { VeiculoCrudComponent } from '../components/gerencimento/veiculo-crud/veiculo-crud.component';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  urlbase = "http://localhost:3001/veiculos"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string){
    this.snackBar.open(msg, 'x', {
      duration: 300,
      horizontalPosition: "right",
      verticalPosition: "top"
    }) 
  }

  createVeiculo(veiculo: Veiculo): Observable<Veiculo>{
    return this.http.post<Veiculo>(this.urlbase, veiculo)
  }

  read(): Observable<Veiculo[]>{
    return this.http.get<Veiculo[]>(this.urlbase)
  }

}
