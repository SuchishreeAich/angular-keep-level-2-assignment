import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterService } from '../services/router.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username = new FormControl();
    password = new FormControl();

    submitMessage: string;

    constructor(private routerSvc: RouterService,
      private authSvc: AuthenticationService) {

    }

    loginSubmit() {
      const credentials = {
        'username': this.username.value,
        'password': this.password.value,
      };
      const authObs = this.authSvc.authenticateUser(credentials);
      authObs.subscribe(
        resp => {
          if (resp) {
            this.routerSvc.routeToDashboard();
            this.authSvc.setBearerToken(resp);
          } else {
            this.submitMessage = 'Unauthorized';
          }
        },
        err => {
          if (err.error) {
            this.submitMessage = err.error.message;
          } else {
            this.submitMessage = err.message;
          }
        }
      );

      return authObs;
    }
}
