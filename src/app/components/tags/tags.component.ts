import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {Tag, TagService} from 'src/app/services/tag.service';
import { WordTagService } from 'src/app/services/word-tag.service';
import {Paraula} from "../../services/paraula.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  data: any[];
  list:any=[];
  tagList:any=[];
  dataSource: any;
  tags: Tag[] = [];
  currentTag: Tag = {description: "", id: "", name: ""};
  currentIndex = -1;
  searchText = '';
  page = 1;
  count = 0;
  pageSize = 7;
  pageSizes = [7, 10, 15, 25];
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
    this.retrieveTags()
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

  llistarTags() {
    this.tagService.getTags().subscribe(
        res=>{
          this.tagList=res;
        },
        err=>console.log(err)
    );
  }

  retrieveTags(): void {
    this.tagService.searchTags(this.searchText, this.page, this.pageSize)
        .subscribe({
          next: (data) => {
            this.tags = data.content;
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
    this.retrieveTags();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTags();
  }

  refreshList(): void {
    this.retrieveTags();
    this.currentTag = {description: "", id: "", name: ""};
    this.currentIndex = -1;
  }

  searchTitle(): void {
    this.page = 1;
    this.retrieveTags();
  }

}
