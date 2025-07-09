import { Component } from '@angular/core';
import {Sidebar} from '../../../core/layout/sidebar/sidebar';

@Component({
  selector: 'app-ventas',
  imports: [

  ],
  templateUrl: './ventas.html',
  standalone: true,
  styleUrl: './ventas.css'
})
export class Ventas {

  leyenda: string = "Ventas";
  getLeyenda():string {
    return  this.leyenda;
  }

}
