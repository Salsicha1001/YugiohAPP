import { LocalUser } from './../Model/LocalUser.model';
import { Injectable } from '@angular/core';
import { STORAGE_KEY } from '../Config/StorageKey.config';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  getLocalUser(): LocalUser{
    let usr = localStorage.getItem(STORAGE_KEY.localUser);
    if (usr == null) {
      return null;
    } else {
      return JSON.parse(usr);
    }
    
  }
  setLocalUser(obj:LocalUser) {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEY.localUser);
    } else {
      localStorage.setItem(STORAGE_KEY.localUser, JSON.stringify(obj));
    }

  }
  
}