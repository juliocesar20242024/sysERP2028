import { Component } from '@angular/core';
import {Sidebar} from '../../../core/layout/sidebar/sidebar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    Sidebar
  ],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.css'
})
export class Home {
  minPrice = [
    {id: 1, name: '500'},
    {id: 2, name: '1000'},
    {id: 3, name: '2000'},
    {id: 4, name: '3000'},
    {id: 5, name: '4000'}
  ]

  leyenda: string = "Home";
  getLeyenda():string {
    return  this.leyenda;
  }
}
