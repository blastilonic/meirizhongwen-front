import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paraula, ParaulaService } from 'src/app/services/paraula.service';

@Component({
  selector: 'app-catala-xines',
  templateUrl: './catala-xines.component.html',
  styleUrls: ['./catala-xines.component.css']
})
export class CatalaXinesComponent implements OnInit {

  paraules: Paraula[] = [];
  random: number = 0;
  correcte = false;
  incorrecte = 0;

  constructor(
    private paraulaService: ParaulaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.paraulaService.select4random(this.activatedRouter.snapshot.params.id).subscribe(
      res=>{
        this.paraules=res;
      },
      err=>console.log(err)
    );
    this.random = Math.floor(Math.random() * 4);
  }

  answer(resposta: Paraula) {
    if (resposta.id == this.paraules[this.random].id) {
      this.speak(this.paraules[this.random].xines);
      this.correcte = true;
    } else {
      this.incorrecte = Number(resposta.id);
    }
  }

  next() {
    this.router.navigate(['/games/catalaxines/' + this.activatedRouter.snapshot.params.id]);
    this.correcte = false;
    this.incorrecte = 0;
    this.ngOnInit();
  }

  speak(paraula: string) {
    var speech = new SpeechSynthesisUtterance(paraula);
    var voices = window.speechSynthesis.getVoices();

    // Set the text and voice attributes.
    speech.text = paraula;
    speech.voice = voices.filter(function(voice) { return voice.name == 'Alex'; })[0];
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.lang = 'zh-CH';
    window.speechSynthesis.speak(speech);
  };

}
