import { hostViewClassName, identifierModuleUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paraula, ParaulaService } from 'src/app/services/paraula.service';
import { Tag, TagService } from 'src/app/services/tag.service';
import { WordTag, WordTagService } from 'src/app/services/word-tag.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {

  paraulaNova: Paraula={id:'', xines:'', pinyin:'', catala:'', comentari:'', frases:''};
  allTags: Tag[] = new Array();
  selectedTags: Tag[] = new Array();
  wordTag: WordTag = {id_word:'', id_tag:''};
  newWordId: Paraula[] = new Array();

  constructor(private paraulaService: ParaulaService,
    private tagService: TagService,
    private wordTagService: WordTagService,
    private router:Router) { }

  ngOnInit(): void {
    this.tagService.getTags().subscribe(
      res=>{
        this.allTags=res;
      },
      err=>console.log(err)
    );
  }

  push(tag: Tag) {
    this.selectedTags.push(tag);
    this.allTags.splice(this.allTags.findIndex(x => x.id === tag.id), 1);
  }

  pull(tag: Tag) {
    this.allTags.push(tag);
    this.selectedTags.splice(this.selectedTags.findIndex(x => x.id === tag.id), 1);
  }

  agregarParaula(){
    this.paraulaService.saveParaula(this.paraulaNova).subscribe(
      res=>{
        this.paraulaService.getBiggerWordId().forEach(paraula => {
          this.paraulaNova = paraula;
          this.selectedTags.forEach(tag => {

            this.wordTag.id_tag = tag.id;
            this.wordTag.id_word = this.paraulaNova.id;
            this.wordTagService.saveWordTag(this.wordTag).subscribe(
              err=>console.log(err)
            );
          })
        })
        this.router.navigate(['/word/list']);
      },
      err=>console.log(err)
    );
  }
}
