import { API_CONFIG } from './../../Config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  findAll(page:number=0, lines:number=10) {
    return this.http.get(`${API_CONFIG.base_url}/card/all?offset=${page}&num=${lines}`);
  }


}
