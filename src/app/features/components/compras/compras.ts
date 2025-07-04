import { Component } from '@angular/core';
import {Sidebar} from '../../../core/layout/sidebar/sidebar';

@Component({
  selector: 'app-compras',
  imports: [
    Sidebar
  ],
  standalone: true,
  templateUrl: './compras.html',
  styleUrl: './compras.css'
})
export class Compras {

  leyenda: string = "Compras";
  getLeyenda():string {
    return  this.leyenda;
  }
}
