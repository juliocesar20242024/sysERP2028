import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Sidebar} from '../../../core/layout/sidebar/sidebar';
import {RouterLink} from '@angular/router';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {UsarbolModel} from '../../../core/models/usarbol-model';
import {UserArbolService} from '../../../core/services/userarbol.services';

@Component({
  selector: 'app-admin',
  imports: [
    RouterLink,
    Sidebar,
    NgForOf,
    AsyncPipe


  ],
  standalone: true,
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin  implements
  OnInit {

  constructor(private dataService: UserArbolService) {

  }

  @Input() bussines?: number
  userArbol!: UsarbolModel[];
  leyenda: string = "Admin";

  getLeyenda(): string {
    return this.leyenda;
  }

  ngOnInit(): void {
    this.dataService.getUserArbol("victormx").subscribe(data => {
      this.userArbol = data;
      console.log(this.userArbol);

    });
  }
}


