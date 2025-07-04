import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

import {RouterLink, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, CommonModule],
  templateUrl: './sidebar.html',
  standalone: true,
  styleUrl: './sidebar.css'
})
export class Sidebar implements
  OnInit, AfterViewInit {

  constructor(private router : Router) { }
  @Input() childMessage? : string
  @Input() bussinesIDS? : any[]
  @Input() bussinesName? : string

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }
}
