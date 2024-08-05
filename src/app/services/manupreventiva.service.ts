import { Observable } from 'rxjs';
import { ManuPreventiva } from './../model/manupreventiva.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrdemServico } from '../model/ordemservico.model';

@Injectable({
  providedIn: 'root'
})
export class ManupreventivaService {

  urlbase1 = "http://localhost:3001/manutencaopreventiva"
  urlBase = "http://localhost:3001/ordemservico"
  
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  

  showMessage(msg: string){
    this.snackBar.open(msg, 'x', {
      duration: 300,
      horizontalPosition: "right",
      verticalPosition: "top"
    }) 
  }

  savemanupreventiva(manupreventiva: ManuPreventiva): Observable<ManuPreventiva>{
    return this.http.post<ManuPreventiva>(this.urlbase1, manupreventiva)
  }

  read(): Observable<OrdemServico[]>{
    return this.http.get<OrdemServico[]>(this.urlBase);
  }

}
