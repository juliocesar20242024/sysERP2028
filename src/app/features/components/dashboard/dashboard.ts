import { Component } from '@angular/core';
import {Sidebar} from '../../../core/layout/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [
    Sidebar
  ],
  templateUrl: './dashboard.html',
  standalone: true,
  styleUrl: './dashboard.css'
})
export class Dashboard {

  minPrice = [
    {id: 1, name: '500'},
    {id: 2, name: '1000'},
    {id: 3, name: '2000'},
    {id: 4, name: '3000'},
    {id: 5, name: '4000'}
  ]

  getminPrice():any[] {
    return  this.minPrice;
  }

  leyenda: string = "Dashboard";
  getLeyenda():string {
    return  this.leyenda;
  }
}
