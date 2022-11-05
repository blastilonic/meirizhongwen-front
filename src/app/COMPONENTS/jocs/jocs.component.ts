import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag, TagService } from 'src/app/SERVICE/tag.service';
import { WordTagService } from 'src/app/SERVICE/word-tag.service';

@Component({
  selector: 'app-jocs',
  templateUrl: './jocs.component.html',
  styleUrls: ['./jocs.component.css']
})
export class JocsComponent implements OnInit {

  constructor(
    private tagService: TagService,
    private router:Router
  ) { }

  allTags: Tag[] = new Array();
  selectedTags: Tag[] = new Array();
  ids: String[] = new Array();


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

  xinesCatala() {
    this.selectedTags.forEach(tag => {
      this.ids.push(tag.id);
    })
    this.router.navigate(['/jocs/xinescatala/' + this.ids]);
  }

  catalaXines() {
    this.selectedTags.forEach(tag => {
      this.ids.push(tag.id);
    })
    this.router.navigate(['/jocs/catalaxines/' + this.ids]);
  }

  tingliCatala() {
    this.selectedTags.forEach(tag => {
      this.ids.push(tag.id);
    })
    this.router.navigate(['/jocs/tinglicatala/' + this.ids]);
  }

  tingliXines() {
    this.selectedTags.forEach(tag => {
      this.ids.push(tag.id);
    })
    this.router.navigate(['/jocs/tinglixines/' + this.ids]);
  }

  hanziPinyin() {
    this.selectedTags.forEach(tag => {
      this.ids.push(tag.id);
    })
    this.router.navigate(['/jocs/hanzipinyin/' + this.ids]);
  }

}
