import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paraula, ParaulaService } from './paraula.service';
import { TagService } from './tag.service';

@Injectable({
  providedIn: 'root'
})
export class WordTagService {

  url='http://localhost:8080/api/wordtags';
  antivateRouter: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWordTagsByTagId(this.antivateRouter.snapshot.params.id);
  }

  getWordTags():Observable<any>
  {
    return this.http.get(this.url);
  }

  getWordTagsByTagId(id_tag: string): Observable<any> {
    return this.http.get(this.url+'/getwords/'+id_tag);
  }

  getNumWords(id_tag: string): Observable<any> {
    return this.http.get(this.url+'/num/'+ id_tag);
  }

  getWordTagsByTagWordId(id_word:string, id_tag:string): Observable<any> {
    return this.http.get(this.url+'/getwordtags/'+id_word + ',' + id_tag);
  }

  getTagsInWord(id_word: string): Observable<any> {
    return this.http.get(this.url + '/tagsinword/' + id_word)
  }

  getTagsNotInWord(id_word: string): Observable<any> {
    return this.http.get(this.url + '/tagsnotinword/' + id_word)
  }

  saveWordTag(wordTag: WordTag):Observable<any>
  {
    return this.http.post(this.url, wordTag);
  }

  editWordTag(id:string, wordTag: WordTag):Observable<any>
  {
    return this.http.put(this.url+'/'+id, wordTag);
  }

  deleteWordTag(id_word:string, id_tag:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id_word + ',' + id_tag);
  }

  searchParaulesByTag(txt: string, pag: number, size: number, tag: string):Observable<any>
  {
    return this.http.get(this.url + `/search?pag=` + pag + '&txt=' + txt + '&size=' + size + '&tag=' + tag);
  }
}


export interface WordTag{
  id_word: string;
  id_tag: string;
}
