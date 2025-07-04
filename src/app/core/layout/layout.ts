import { Component } from '@angular/core';
import {Sidebar} from './sidebar/sidebar';
import {Topbar} from './topbar/topbar';
import {Navbar} from './navbar/navbar';

@Component({
  selector: 'app-layout',
  imports: [
    Sidebar,
    Topbar,
    Navbar
  ],

  templateUrl: './layout.html',
  standalone: true,
  styleUrl: './layout.css'
})
export class Layout {

}
