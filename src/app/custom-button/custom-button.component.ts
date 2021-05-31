import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'boton',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {
  @Input() texto: string

  constructor() { }

  ngOnInit(): void {
  }

}
