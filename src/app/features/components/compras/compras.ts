import {Component, Input} from '@angular/core';
import {Sidebar} from '../../../core/layout/sidebar/sidebar';

@Component({
  selector: 'app-compras',
  imports: [

  ],
  standalone: true,
  templateUrl: './compras.html',
  styleUrl: './compras.css'
})
export class Compras {

  leyenda: string = "Compras";
  @Input() bussines!: number;
  getLeyenda():string {
    return  this.leyenda;
  }
}
