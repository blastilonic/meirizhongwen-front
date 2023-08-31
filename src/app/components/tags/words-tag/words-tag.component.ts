import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Paraula, ParaulaService } from 'src/app/services/paraula.service';
import { Tag, TagService } from 'src/app/services/tag.service';
import { WordTagService } from 'src/app/services/word-tag.service';

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
  tag: Tag = {description: "", id: "", name: ""};
  data: any[];
  paraules: Paraula[] = [];
  currentParauka: Paraula = {catala: "", comentari: "", frases: "", id: "", pinyin: "", xines: ""};
  currentIndex = -1;
  page = 1;
  count = 0;
  pageSize = 7;
  pageSizes = [7, 10, 15, 25];
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
    this.retrieveParaules();
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

  listarParaules()
  {
    this.paraulaService.getParaules().subscribe(
        res=>{
          this.list=res;
        },
        err=>console.log(err)
    );
  }

  retrieveParaules(): void {
    this.wordTagService.searchParaulesByTag(this.searchText, this.page, this.pageSize, this.antivateRouter.snapshot.params.id)
        .subscribe({
          next: (data) => {
            this.paraules = data.content;
            this.count = data.totalElements;
            console.log(data);
          },
          error: (err) => {
            console.log(err);
          }
        });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveParaules();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveParaules();
  }

  refreshList(): void {
    this.retrieveParaules();
    this.currentParauka = {catala: "", comentari: "", frases: "", id: "", pinyin: "", xines: ""};
    this.currentIndex = -1;
  }

  searchTitle(): void {
    this.page = 1;
    this.retrieveParaules();
  }

}
