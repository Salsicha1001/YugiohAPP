import { API_CONFIG } from './../../Config/api.config';
import { StorageService } from './../Storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient, private storageService:StorageService) { }

  
  getUser() {
    let a = this.storageService.getLocalUser().email
    return this.http.get(`${API_CONFIG.base_url}/user/email=${a}`)
 
  }

  saveCardUser(card) {
    return this.http.post(`${API_CONFIG.base_url}/card/add`, card)
  }
  getCardUser() {
    let email = this.storageService.getLocalUser().email
    return this.http.get(`${API_CONFIG.base_url}/card/cart/${email}`)
  }
  removeCard(id) {
    return this.http.get(`${API_CONFIG.base_url}/card/remove/${id}`)

  }
}
