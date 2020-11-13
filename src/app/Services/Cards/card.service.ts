import { API_CONFIG } from './../../Config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  findAll(page: number = 0, lines: number = 10) {
    return this.http.get(`${API_CONFIG.base_url}/card/all?offset=${page}&num=${lines}`);
  }

  findAllSpell(page: number = 1, lines: number = 10) {
    return this.http.get(`${API_CONFIG.base_url}/card/spell?offset=${lines}&num=${page}`);
  }
  findAllTrap(page: number = 1, lines: number = 10) {
    return this.http.get(`${API_CONFIG.base_url}/card/trap?offset=${lines}&num=${page}`);
  }
  findAllTrapRace(page: number = 1, lines: number = 10, race: string) {
    return this.http.get(`${API_CONFIG.base_url}/card/trap/${race}?offset=${lines}&num=${page}`);
  }
  findAllSpelRace(page: number = 1, lines: number = 10, race: string) {
    return this.http.get(`${API_CONFIG.base_url}/card/spell/${race}?offset=${lines}&num=${page}`);
  }

  findAllMonster(page: number = 1, lines: number = 10, type: string) {
    return this.http.get(`${API_CONFIG.base_url}/card/monsterType/${type}?offset=${lines}&num=${page}`);
  }
  findAllMonsterRace(page: number = 1, lines: number = 10, race: string) {
    return this.http.get(`${API_CONFIG.base_url}/card/monsterRace/${race}?offset=${lines}&num=${page}`);
  }
  findAllMonsterTypeRace(page: number = 1, lines: number = 10, type: string, race: string) {
    return this.http.get(`${API_CONFIG.base_url}/card/monster/${type}/${race}?offset=${lines}&num=${page}`);
  }
  findClass(page: number = 1, lines: number = 10, att: string,) {
    return this.http.get(`${API_CONFIG.base_url}/card/attribute/${att}/?offset=${page}&num=${lines}`);

  }
}
