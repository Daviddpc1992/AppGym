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

  getAll(pLimit = 1, pPage = 10): Promise<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseUrl}?limit=${pLimit}&page=${pPage}`).toPromise();
  }

  // create(pCLiente: Cliente) {
  //   return this.httpClient.post(this.baseUrl).toPromise()
  // }



  /* Componente formulario cliente - Tipo Model */
  /* Dento del formulario definir todos  */
  /* Submit del formulario llamar al metodo create del servicio pasandole los valores del formulario */
}
