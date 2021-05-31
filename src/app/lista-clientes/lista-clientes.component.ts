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

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.clienteService.getAll()
    .then(response => this.arrClientes = response)
    .catch(error => console.log(error))
  }

}
