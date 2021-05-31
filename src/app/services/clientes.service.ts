import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/clientes.interfaces'


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: string;


  constructor(private httpClient: HttpClient) {
    
    this.baseUrl = 'http://localhost:3000/api/clientes';

  }

  getAll(): Promise<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.baseUrl).toPromise();
  }
}
