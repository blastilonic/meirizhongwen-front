import { Component, OnInit } from '@angular/core';
import { Paraula, ParaulaService } from 'src/app/SERVICE/paraula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paraules: Paraula[];

  constructor( private paraulaService: ParaulaService) { }

  ngOnInit(): void {
    this.get4newWords();
  }

  get4newWords()
  {
    this.paraulaService.get4newWords().subscribe(
      res=>{
        this.paraules=res;
      }
    );
  }

}
