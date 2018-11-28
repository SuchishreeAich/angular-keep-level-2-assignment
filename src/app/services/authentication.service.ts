import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {

  }

  authenticateUser(data) {
    return this.httpClient.post('http://localhost:3000/auth/v1/', data)
      .map(response => {
        let token;
        if (response.hasOwnProperty('token')) {
          token = response['token'];
        } else {
          token = null;
        }
        return token;
      });
  }

  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  isUserAuthenticated(token): Promise<boolean> {

    const httpHeaders = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };

    const isAuthenticatedResp = this.httpClient.post('http://localhost:3000/auth/v1/isAuthenticated', {}, httpHeaders)
      .map(response => {
        if (response && response['isAuthenticated']) {
          return response['isAuthenticated'];
        }
        return false;
      });
    return isAuthenticatedResp.toPromise();

  }
}
