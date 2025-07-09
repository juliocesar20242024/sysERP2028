import {Component, Input} from '@angular/core';
import {Sidebar} from '../../../core/layout/sidebar/sidebar';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterLink,
    Sidebar

  ],
  templateUrl: './dashboard.html',
  standalone: true,
  styleUrl: './dashboard.css'
})
export class Dashboard {
  @Input() bussines!: number;
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
