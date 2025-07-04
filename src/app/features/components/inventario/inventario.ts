import { Component } from '@angular/core';
import {Sidebar} from '../../../core/layout/sidebar/sidebar';

@Component({
  selector: 'app-inventario',
  imports: [
    Sidebar
  ],
  templateUrl: './inventario.html',
  standalone: true,
  styleUrl: './inventario.css'
})
export class Inventario {


  leyenda: string = "Ventas";
  getLeyenda():string {
    return  this.leyenda;
  }
}
