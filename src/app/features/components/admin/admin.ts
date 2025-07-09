import {Component, Input} from '@angular/core';
import {Sidebar} from '../../../core/layout/sidebar/sidebar';
import {RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [
    RouterLink,
    Sidebar,
    NgForOf


  ],
  standalone: true,
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  @Input() bussines? : number
  leyenda: string = "Admin";
  getLeyenda():string {
    return  this.leyenda;
  }
}
