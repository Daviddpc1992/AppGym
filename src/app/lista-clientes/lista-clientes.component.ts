import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/clientes.interfaces';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaCLientesComponent implements OnInit {

  arrClientes: Cliente[];
  currentPage: number;

  constructor(private clienteService: ClientesService) {
    this.currentPage = 1;

    
  }

  ngOnInit(): void {
    this.clienteService.getAll()
    .then(response => this.arrClientes = response)
    .catch(error => console.log(error))
  }


  changePage(siguiente: boolean) {
    this.currentPage = siguiente ? (this.currentPage + 1) : (this.currentPage - 1);
 
    this.clienteService.getAll(this.currentPage)
    .then(response => this.arrClientes = response)
    .catch(error => console.log(error))
  }

  mostrarForm() {
    
  }
 

  

}
