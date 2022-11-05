import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { merge, Observable, Subject } from 'rxjs';
import { tap, map, debounceTime, takeUntil } from 'rxjs/operators';
import { ParaulaService, Paraula } from 'src/app/SERVICE/paraula.service';
import {
	ListeningStarted,
	SpeakingStarted,
	RecognizedTextAction,
} from '../../../../classes/models';
import { SenseService } from '../../../SERVICE/sense.service';

@Component({
  selector: 'app-xines-speech',
  templateUrl: './xines-speech.component.html',
  styleUrls: ['./xines-speech.component.css']
})
export class XinesSpeechComponent implements OnInit {

	destroy$ = new Subject();

	recognized$ = this.senseService.getType(RecognizedTextAction);
	state$: Observable<string>;
	message$: Observable<string>;

	micAccess$ = this.senseService.hasMicrofonAccess$;

  paraules: Paraula[] = [];
  random: number = 0;
  correcte = false;
  incorrecte = 0;

	constructor(private senseService: SenseService,
    private paraulaService: ParaulaService,
    private activatedRouter: ActivatedRoute,
    private router: Router) {
		this.message$ = this.recognized$.pipe(tap(console.log));

    this.recognized$.forEach(x => {
      if (x == this.paraules[this.random].xines) {
        this.correcte = true;
      }
    })


		const speaking$ = this.senseService
			.getType(SpeakingStarted)
			.pipe(map(() => 'SPEAKING'));

		const listening$ = this.senseService
			.getType(ListeningStarted)
			.pipe(map(() => 'LISTENING'));

		this.state$ = merge(speaking$, listening$);

		this.recognized$
			.pipe(
				debounceTime(200),
				tap((msg) => {
					// msg = `you said ${msg}`;
					this.senseService.speak(msg);
				}, takeUntil(this.destroy$))
			)
			.subscribe();
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

	getImageClass() {
		return {
			image: true,
		};
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

	activate() {
		this.senseService.activate();
	}

  answer(resposta: String) {
    if (resposta == this.paraules[this.random].id) {
      this.speak(this.paraules[this.random].xines);
      this.correcte = true;
    } else {
      alert("Incorrecte!");
    }
  }

  next() {
    this.router.navigate(['/jocs/xinescatala/' + this.activatedRouter.snapshot.params.id]);
    this.correcte = false;
    this.incorrecte = 0;
    this.ngOnInit();
  }

  speak(paraula: string) {
    var speech = new SpeechSynthesisUtterance(paraula);
    // Set the text and voice attributes.
    speech.text = paraula;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.lang = 'zh-CH';
    window.speechSynthesis.speak(speech);
  };

}
