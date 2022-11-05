import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TagService } from 'src/app/services/tag.service';
import { WordTagService } from 'src/app/services/word-tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  list:any=[];
  dataSource: any;
  searchText = '';
  config: any;
  constructor(private tagService: TagService,
    private wordTagService: WordTagService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      this.config = {
        currentPage: 1,
        itemsPerPage: 7
      };

      this.route.queryParamMap.pipe(
      map(params => params.get("page")))
      .subscribe(page => (this.config.currentPage = page));
     }

  ngOnInit(): void {
    this.listTags();
  }

  listTags()
  {
    this.tagService.getTags().subscribe(
      res=>{
        this.list=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(id:string)
  {
    this.tagService.deleteTag(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

  pageChange(newPage: number) {
    this.router.navigate(['tag/list'], { queryParams: { page: newPage } });
  }
    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    return this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
