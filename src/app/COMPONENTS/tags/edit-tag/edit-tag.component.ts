import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag, TagService } from 'src/app/SERVICE/tag.service';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})
export class EditTagComponent implements OnInit {

  id:string="";
  actualTag: Tag={id:'', name:'', description:''};
  constructor(
    private tagService: TagService,
    private antivateRouter: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id= this.antivateRouter.snapshot.params.id;
    this.tagService.getTag(this.id).subscribe(
      res=>{
        this.actualTag=res;
      },

      err=>console.log(err)
    );
  }

  save(){
    this.tagService.editTag(this.id, this.actualTag).subscribe(
      res=>{
        this.router.navigate(['/tag/list']);
      },

      err=>console.log(err)
    );
  }

}
