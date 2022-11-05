import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Paraula, ParaulaService } from 'src/app/SERVICE/paraula.service';
import { Tag, TagService } from 'src/app/SERVICE/tag.service';
import { WordTagService } from 'src/app/SERVICE/word-tag.service';

@Component({
  selector: 'app-words-tag',
  templateUrl: './words-tag.component.html',
  styleUrls: ['./words-tag.component.css']
})
export class WordsTagComponent implements OnInit {

  config: any;
  allWordList:any=[];
  newWordList:any=[];
  id: any;
  list: any=[];
  dataSource: any;
  searchText = '';
  count: string;
  tag: any;
  constructor(
    private wordTagService: WordTagService,
    private paraulaService: ParaulaService,
    private antivateRouter: ActivatedRoute,
    private route: ActivatedRoute,
    private router: Router,
    private tagService: TagService) {
      this.config = {
        currentPage: 1,
        itemsPerPage: 7
      };

      this.route.queryParamMap.pipe(
      map(params => params.get("page")))
      .subscribe(page => (this.config.currentPage = page));
     }

  ngOnInit(): void {
    this.getTag();
    this.listTagWords();
    this.countWords();
  }

  listTagWords()
  {
    this.id= this.antivateRouter.snapshot.params.id;

    this.wordTagService.getWordTagsByTagId(this.id).subscribe(
      res=>{
        this.list=res;
        console.log(res);
      },
      err=>console.log(err)
    );
  }

  getTag() {
    this.tagService.getTag(this.antivateRouter.snapshot.params.id).subscribe(
      res=>{
        this.tag=res;
        console.log(res);
      },
      err=>console.log(err)
    );
  }

  countWords() {
    this.wordTagService.getNumWords(this.antivateRouter.snapshot.params.id).subscribe(
      res => {
        this.count = res;
      }
    )
  }

  eliminar(id_word:string)
  {
    this.wordTagService.deleteWordTag(id_word, this.id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

  pageChange(newPage: number) {
    this.router.navigate([this.router.url], { queryParams: { page: newPage } });
  }
    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    return this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
