import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../interfaces/clientes.interfaces';


@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.css']
})
export class CardClienteComponent implements OnInit {

  @Input() cliente: Cliente;


  constructor(private httpClient: HttpClient) {


   
  }
  ngOnInit(): void {
 

  }
}
