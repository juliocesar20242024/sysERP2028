import { Component } from '@angular/core';
import {Sidebar} from '../../../core/layout/sidebar/sidebar';

@Component({
  selector: 'app-cotizaciones',
  imports: [

  ],
  templateUrl: './cotizaciones.html',
  standalone: true,
  styleUrl: './cotizaciones.css'
})
export class Cotizaciones {
  leyenda: string = "Cotizaciones";
  getLeyenda():string {
    return  this.leyenda;
  }
}
