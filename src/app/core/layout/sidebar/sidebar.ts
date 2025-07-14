import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

import {RouterLink, Router} from '@angular/router';
import {Admin} from '../../../features/components/admin/admin';
import {Compras} from '../../../features/components/compras/compras';
import {Dashboard} from '../../../features/components/dashboard/dashboard';
import {Cotizaciones} from '../../../features/components/cotizaciones/cotizaciones';
import {Factura} from '../../../features/components/factura/factura';
import {Inventario} from '../../../features/components/inventario/inventario';
import {UsarbolModel} from '../../models/usarbol-model';
import {UserArbolService} from '../../services/userarbol.services';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, CommonModule],
  templateUrl: "./sidebar.html",
  standalone: true,
  styleUrl: './sidebar.css'
})
export class Sidebar implements
  OnInit, AfterViewInit {

  userArbol: UsarbolModel[] =[];

  constructor(private dataService: UserArbolService) {

  }

  @Input() childMessage?: string
  @Input() bussinesIDS?: any[]
  @Input() bussinesName?: string
  @Input() bussines?: number = 1

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  this.dataService.getUserArbol("victormx").subscribe(data =>
    {
       this.userArbol = data;
       console.log(data);
    });
  }


}
