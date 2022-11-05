import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag, TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit {

  newTag: Tag={id:'', name:'', description:''};

  constructor(private tagService: TagService, private router:Router) { }

  ngOnInit(): void {

  }

  addTag(){
    this.tagService.saveTag(this.newTag).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/tag/list']);
      },
      err=>console.log(err)
    );
  }

}
