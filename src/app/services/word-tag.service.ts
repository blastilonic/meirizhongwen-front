import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paraula, ParaulaService } from './paraula.service';
import { TagService } from './tag.service';

@Injectable({
  providedIn: 'root'
})
export class WordTagService {

  url='http://185.61.126.159:8080/api/wordtags';
  antivateRouter: any;
  constructor(private http: HttpClient,
    private paraulaService: ParaulaService,
    private tagService: TagService) { }

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
}


export interface WordTag{
  id_word: string;
  id_tag: string;
}
