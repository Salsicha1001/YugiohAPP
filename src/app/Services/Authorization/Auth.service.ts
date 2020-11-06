import { LocalUser } from './../../Model/LocalUser.model';
import { CredDto } from './../../Model/DTO/CredDto.model';
import { API_CONFIG } from './../../Config/api.config';
import { StorageService } from './../Storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private storageService: StorageService) { }

  authenticate(creds: CredDto) {
    return this.http.post(`${API_CONFIG.base_url}/authenticate`, creds, { observe: 'response', responseType: 'text' });
  }

  successLogin(authorizationValue: string) {
    let tok = authorizationValue.substring(7);
    let user: LocalUser = {
      token: tok, email: this.jwtHelper.decodeToken(tok).sub
    };
    this.storageService.setLocalUser(user);
  }

  logout() {
    this.storageService.setLocalUser(null);
  }
  refreshToken() {
    let a = this.storageService.getLocalUser()

    if (a != null) {
      let b = a.email;
      return this.http.post(
        `${API_CONFIG.base_url}/refresh_token`, b,
        {
          observe: 'response',
          responseType: 'text'
        });
    } else {
      return null;
    }
  }

}
