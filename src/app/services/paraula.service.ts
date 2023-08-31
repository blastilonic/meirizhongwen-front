import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParaulaService {

  url='http://localhost:8080/api/paraules';
  constructor(private http: HttpClient) { }

  getParaules():Observable<any>
  {
    return this.http.get(this.url);
  }

  getUnaParaula(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  get4newWords(): Observable<any> {
    return this.http.get(this.url + '/4new')
  }

  getBiggerWordId():Observable<any>
  {
    return this.http.get(this.url+'/new');
  }

  saveParaula(paraula: Paraula):Observable<any>
  {
    return this.http.post(this.url, paraula);
  }

  editParaula(id:string, paraula: Paraula):Observable<any>
  {
    return this.http.put(this.url+'/'+id, paraula);
  }

  deleteParaula(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }

  select4random(ids: string):Observable<any> {
    return this.http.get(this.url + `/select4random/` + ids);
  }

  searchParaules(txt: string, pag: number, size: number):Observable<any>
  {
    return this.http.get(this.url + `/search?pag=` + pag + '&txt=' + txt + '&size=' + size);
  }
}


export interface Paraula{
  id:string;
  xines: string;
  pinyin: string;
  catala: string;
  comentari: string;
  frases: string;
}
