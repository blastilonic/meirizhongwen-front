import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paraula, ParaulaService } from 'src/app/SERVICE/paraula.service';
import { Tag, TagService } from 'src/app/SERVICE/tag.service';
import { WordTag, WordTagService } from 'src/app/SERVICE/word-tag.service';

@Component({
  selector: 'app-paraula',
  templateUrl: './paraula.component.html',
  styleUrls: ['./paraula.component.css']
})
export class ParaulaComponent implements OnInit {

  paraula: Paraula;
  frases: string[];
  tags: Tag[];

  constructor(private paraulaService: ParaulaService,
    private wordTagService: WordTagService,
    private tagService: TagService,
    private activateRouter: ActivatedRoute,
    private router: Router,) {

     }

  ngOnInit(): void {
    this.getParaula();
    this.getTagsInWord();
  }

  getParaula() {
    this.paraulaService.getUnaParaula(this.activateRouter.snapshot.params.id).subscribe(res => {
      this.paraula = res;
      this.frases = res.frases.split(';');
    })
  }

  getTagsInWord() {
    this.wordTagService.getTagsInWord(this.activateRouter.snapshot.params.id).subscribe(
      res=>{
        this.tags=res;
      },

      err=>console.log(err)
    );
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

  eliminar(id:string)
  {
    this.paraulaService.deleteParaula(id).subscribe(
      res=>{
      this.router.navigate(['/paraula/list']);
      this.ngOnInit();},
      err=>console.log(err)
    );
  }
}
