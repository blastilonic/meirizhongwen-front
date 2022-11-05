import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Paraula, ParaulaService } from 'src/app/services/paraula.service';
import { Tag, TagService } from 'src/app/services/tag.service';
import { WordTag, WordTagService } from 'src/app/services/word-tag.service';

@Component({
  selector: 'app-editar',
  templateUrl: './edit-word.component.html',
  styleUrls: ['./edit-word.component.css']
})
export class EditWordComponent implements OnInit {

  id:string="";
  checked:boolean = false;
  paraulaActual: Paraula={id:'', xines:'', pinyin:'', catala:'', comentari:'', frases:''};
  allTags: Tag[] = new Array();
  tags: Tag[] = new Array();
  noTags: Tag[] = new Array();
  wordTag: WordTag = {id_word:'', id_tag:''};
  wordTags: WordTag[] = new Array();

  constructor(
    private paraulaService:ParaulaService,
    private activateRouter: ActivatedRoute,
    private router:Router,
    private wordTagService: WordTagService,
    private tagService: TagService
    ) { }

  ngOnInit(): void {
    this.id= this.activateRouter.snapshot.params.id;
    this.paraulaService.getUnaParaula(this.id).subscribe(
      res=>{
        this.paraulaActual=res;
      },

      err=>console.log(err)
    );

    this.tagService.getTags().subscribe(
      res=>{
        this.allTags=res;
      },

      err=>console.log(err)
    );

    this.wordTagService.getTagsInWord(this.id).subscribe(
      res=>{
        this.tags=res;
      },

      err=>console.log(err)
    );

    this.wordTagService.getTagsNotInWord(this.id).subscribe(
      res=>{
        this.noTags=res;
      },

      err=>console.log(err)
    );

    this.wordTagService.getWordTags().subscribe(
      res=>{
        this.wordTags=res;
      },

      err=>console.log(err)
    );
  }

  save(){
    this.paraulaService.editParaula(this.id, this.paraulaActual).subscribe(
      res=>{
        this.router.navigate(['/word/list']);
      },

      err=>console.log(err)
    );
  }

  checkBox(id_tag:string, id_word:string) {
    this.wordTagService.getWordTags().forEach(wt => {
      if (wt.id_tag == id_tag && wt.id_word == id_word) {
        this.checked = true;
      }
    })
    return this.checked;
  }

  unCheck(id_tag:string) {
    this.wordTagService.deleteWordTag(this.id, id_tag).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

  check(id_tag:string) {
    this.wordTag.id_tag = id_tag;
    this.wordTag.id_word = this.id;

    this.wordTagService.saveWordTag(this.wordTag).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );

  }
}
