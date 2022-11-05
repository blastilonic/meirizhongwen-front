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
  searchText = '';
  list:any=[];
  tagList:any=[];
  dataSource: any;
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

    pageChange(newPage: number) {
      this.router.navigate(["//word/list"], { queryParams: { page: newPage } });
    }
      applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      return this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  ngOnInit(): void {
    this.listarParaules();
    this.llistarTags();
  }

  listarParaules()
  {
    this.paraulaService.getParaules().subscribe(
      res=>{
        this.list=res;
        console.log(res);
      },
      err=>console.log(err)
    );
  }

  llistarTags() {
    this.tagService.getTags().subscribe(
      res=>{
        this.tagList=res;
        console.log(res);
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

}
