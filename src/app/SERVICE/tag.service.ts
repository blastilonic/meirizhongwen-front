import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParaulaService } from './paraula.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  url='http://185.61.126.159:8080/api/tags';
  constructor(private http: HttpClient,
    private paraulaService: ParaulaService) { }

  getTags():Observable<any>
  {
    return this.http.get(this.url);
  }

  getTag(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  saveTag(tag: Tag):Observable<any>
  {
    return this.http.post(this.url, tag);
  }

  editTag(id:string, tag: Tag):Observable<any>
  {
    return this.http.put(this.url+'/'+id, tag);
  }

  deleteTag(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}


export interface Tag{
  id: string;
  name: string;
  description: string;
}
