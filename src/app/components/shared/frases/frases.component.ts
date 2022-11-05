import { Component, Input, OnInit } from '@angular/core';
import { Paraula } from 'src/app/services/paraula.service';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {

  @Input() paraula: Paraula;

  frases: string[];

  constructor() { }

  ngOnInit(): void {
    this.getFrases();
  }

  getFrases() {
    this.frases = this.paraula.frases.split(';');
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
