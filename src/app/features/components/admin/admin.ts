import { Component } from '@angular/core';
import {Sidebar} from '../../../core/layout/sidebar/sidebar';

@Component({
  selector: 'app-admin',
  imports: [
    Sidebar
  ],
  standalone: true,
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  leyenda: string = "Admin";
  getLeyenda():string {
    return  this.leyenda;
  }
}
