import { Component } from '@angular/core';
import {Sidebar} from '../../../core/layout/sidebar/sidebar';

@Component({
  selector: 'app-factura',
  imports: [

  ],
  templateUrl: './factura.html',
  standalone: true,
  styleUrl: './factura.css'
})
export class Factura {

  leyenda: string = "Facturas";
  getLeyenda():string {
    return  this.leyenda;
  }
}
