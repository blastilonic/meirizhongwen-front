import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paraula, ParaulaService } from 'src/app/services/paraula.service';
import { map } from "rxjs/operators";
import { TagService } from 'src/app/services/tag.service';
import { MatchiplistComponent } from '../../shared/matchiplist/matchiplist.component';


@Component({
  selector: 'app-inicio',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})

export class WordListComponent implements OnInit {
  data: any[];
  config: any;
  list:any=[];
  tagList:any=[];
  dataSource: any;
  paraules: Paraula[] = [];
  currentParaula: Paraula = {catala: "", comentari: "", frases: "", id: "", pinyin: "", xines: ""};
  currentIndex = -1;
  searchText = '';
  page = 1;
  count = 0;
  pageSize = 7;
  pageSizes = [7, 10, 15, 25];

  constructor(private paraulaService: ParaulaService,
    private tagService: TagService,
    private route: ActivatedRoute,
    private router: Router) {
      this.config = {
        currentPage: 1,
        itemsPerPage: 7
      };

      this.route.queryParamMap.pipe(
      map(params => params.get("page")))
      .subscribe(page => (this.config.currentPage = page));
    }

  ngOnInit(): void {
    this.retrieveParaules();
  }

  pageChange(newPage: number) {
    this.router.navigate(["//word/list"], { queryParams: { page: newPage } });
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

  llistarTags() {
    this.tagService.getTags().subscribe(
      res=>{
        this.tagList=res;
      },
      err=>console.log(err)
    );
  }

  eliminar(id:string)
  {
    this.paraulaService.deleteParaula(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

  retrieveParaules(): void {
    this.paraulaService.searchParaules(this.searchText, this.page, this.pageSize)
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
    this.currentParaula = {catala: "", comentari: "", frases: "", id: "", pinyin: "", xines: ""};
    this.currentIndex = -1;
  }

  searchTitle(): void {
    this.page = 1;
    this.retrieveParaules();
  }

}
