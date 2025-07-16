import {Component, Input} from '@angular/core';
import {Sidebar} from '../../../core/layout/sidebar/sidebar';
import {RouterLink} from '@angular/router';
import {NgForOf} from "@angular/common";
import {UsarbolModel} from '../../../core/models/usarbol-model';
import {UserArbolService} from '../../../core/services/userarbol.services';

@Component({
  selector: 'app-dashboard',
    imports: [
        RouterLink,
        Sidebar,
        NgForOf

    ],
  templateUrl: './dashboard.html',
  standalone: true,
  styleUrl: './dashboard.css'
})
export class Dashboard {

  constructor(private dataService: UserArbolService) {

  }
  userArbol!: UsarbolModel[];
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

  ngOnInit(): void {
    this.dataService.getUserArbol("victormx").subscribe(data => {
      this.userArbol = data;
      console.log(this.userArbol);

    });
  }
}
