import { Observable } from 'rxjs';
import { OrdemServico } from '../model/ordemservico.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import{ MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {

  urlBase = "http://localhost:3001/ordemservico"

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }

  showMessage(msg: string){
    this.snackBar.open(msg, 'x', {
      duration: 1000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(ordemservico: OrdemServico): Observable<OrdemServico>{
    return this.http.post<OrdemServico>(this.urlBase,ordemservico)
  }

  read(): Observable<OrdemServico[]>{
    return this.http.get<OrdemServico[]>(this.urlBase);
  }


}
