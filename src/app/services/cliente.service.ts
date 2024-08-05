import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ MatSnackBar} from '@angular/material/snack-bar';
import { Cliente } from '../model/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl = "http://localhost:3001/cliente"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string){
    this.snackBar.open(msg, 'x', {
      duration: 1000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  //post cliente
  createCliente(cliente: Cliente): Observable<Cliente>{
      return this.http.post<Cliente>(this.apiUrl,cliente)
  }

  // retornando um array de clientes na requisição GET Observable metodo que escuta os eventos de resposta
  read(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl)
  }
}
