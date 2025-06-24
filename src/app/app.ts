import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Login} from './features/components/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected title = 'sysERP2028';
}
