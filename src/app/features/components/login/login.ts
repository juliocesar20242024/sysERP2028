import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule],
  templateUrl: './login.html',
  standalone: true,
  styleUrl: './login.css'
})
export class Login {

  constructor(private router: Router)
  {

  }
  toggleClass() {

  }

  onSend() {
    this.router.navigate(['home']);
  }


}
