import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { TagService } from 'src/app/SERVICE/tag.service';

@Component({
  selector: 'app-matchiplist',
  templateUrl: './matchiplist.component.html',
  styleUrls: ['./matchiplist.component.css']
})
export class MatchiplistComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  dataCtrl = new FormControl('');
  filteredData: Observable<any[]>;
  data: any[] = [];
  @ViewChild('dataInput') dataInput: ElementRef<HTMLInputElement>;
  @Input() allData: any[];


  constructor(private tagService: TagService) {
    this.filteredData = this.dataCtrl.valueChanges.pipe(
      startWith(null),
      map((data: any | null) => (data ? this._filter(data) : this.allData.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.data.push(value);
    }

    event.chipInput!.clear();

    this.dataCtrl.setValue(null);
  }

  remove(data: any): void {
    const index = this.data.indexOf(data);

    if (index >= 0) {
      this.data.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.data.push(event.option.viewValue);
    this.dataInput.nativeElement.value = '';
    this.dataCtrl.setValue(null);
  }

  public getSelectedTags(): any[] {
    let array: any[] = [];
    this.data.forEach(y => {
      this.allData.forEach(x => {
        if(y == x.name) {
          array.push(x);
        }
      });
    });
    return array;
  }

  private _filter(value: any): any[] {
    const filterValue = value.toLowerCase();
    let array: any[] = [];

    this.allData.forEach(x => {
      let result = true;
      this.data.forEach(y => {
        if(y == x.name) {
          result = false;
        }
      })
      if (result == true) {
        array.push(x);
      }
    })

    return array.filter(data => data.name.toLowerCase().includes(filterValue));
  }
}
