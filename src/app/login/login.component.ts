import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'qs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private _router: Router) {}

  login(): void {
    setTimeout(() => {
      this._router.navigate(['/dashboardComponent']);
    }, 500);
  }
}
